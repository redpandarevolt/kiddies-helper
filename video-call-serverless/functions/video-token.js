exports.handler=function(context, event, callback){
    const TWILIO_ACCOUNT_SID = context.TWILIO_ACCOUNT_SID;
    const TWILIO_API_KEY_SID = context.TWILIO_API_KEY_SID;
    const TWILIO_API_KEY_SECRET = context.TWILIO_API_KEY_SECRET;
    const AccessToken = Twilio.jwt.AccessToken;

    const accessToken = new AccessToken(
        TWILIO_ACCOUNT_SID,
        TWILIO_API_KEY_SID,
        TWILIO_API_KEY_SECRET
    );

    accessToken.identity = event.identity;

    const VideoGrant = AccessToken.VideoGrant;
    const videoGrant = new VideoGrant({
        room: event.room,
    });
    accessToken.addGrant(videoGrant);

    let response = new Twilio.Response();
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST",
        "Access-Control-Allow-Headers": "Content-Type"
    };

    response.setHeaders(headers);
    response.setBody(accessToken.toJwt());

    callback(null, response);
};
