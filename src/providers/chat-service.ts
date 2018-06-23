import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Events} from 'ionic-angular';

import 'rxjs/add/operator/toPromise';

export class ChatMessage {
    messageId: string;
    userId: string;
    userName: string;
    userImgUrl: string;
    toUserId: string;
    time: number | string;
    message: string;
    status: string;
}

export class UserInfo {
    userId: string;
    userName: string;
    userImgUrl: string;
}

@Injectable()
export class ChatService {

    constructor(public http: Http,
                public events: Events) {
    }

    mockNewMsg(msg) {
        const mockMsg: ChatMessage = {
            messageId: Date.now().toString(),
            userId: '1',
            userName: 'Company Name',
            userImgUrl: './assets/img/006.png.jpg',
            toUserId: '2',
            time: Date.now(),
            message: msg.message,
            status: 'success'
        };

        setTimeout(() => {
            this.events.publish('chat:received', mockMsg, Date.now())
        }, Math.random() * 1800)
    }

    getMsgList(): Promise<ChatMessage[]> {
        const msgListUrl = './assets/mock/msg-list.json';
        return this.http.get(msgListUrl)
            .toPromise()
            .then(response => response.json().array as ChatMessage[])
            .catch(err => Promise.reject(err || 'err'));
    }

    sendMsg(msg: ChatMessage) {
        return new Promise(resolve => setTimeout(() => resolve(msg), Math.random() * 1000))
            .then(() => this.mockNewMsg(msg));
    }

    getUserInfo(): Promise<UserInfo> {
        const userInfo: UserInfo = {
            userId: '2',
            userName: 'Adam',
            userImgUrl: 'assets/img/005.png'
        };
        return new Promise(resolve => resolve(userInfo));
    }

}
