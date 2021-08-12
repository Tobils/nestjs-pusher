import { Injectable, Logger } from '@nestjs/common';
import * as Pusher from 'pusher'

@Injectable()
export class AppService {

  private readonly pusher_config = {
    appId: process.env.APP_ID,
    key: process.env.APP_KEY,
    secret: process.env.APP_SECRET,
    cluster: process.env.APP_CLUSTER,
    useTLS: true
  }
  
  private pusher = new Pusher(this.pusher_config);

  
  pushNotif(body: {userid: string, event: string, message: string}){
    const __channel = `userid-channel-${body.userid}`
    const __event   = `${body.event}`
    this.pusher.trigger(__channel, __event, {
      message: body
    })
    Logger.debug(`send message to client ${JSON.stringify(body)}`)
    return body
  }
}
