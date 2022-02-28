import { date, datetime , etag, integer} from './common'

export type youtube = {
  "kind": "youtube#searchResult",
  "etag": etag,
  "id": {
    "kind": string,
    "videoId": string,
    "channelId": string,
    "playlistId": string
  },
  "snippet": {
    "publishedAt": datetime,
    "channelId": string,
    "title": string,
    "description": string,
    "thumbnails": {
      (key:any): {
        "url": string,
        "width": integer,
        "height": integer
      }
    },
    "channelTitle": string,
    "liveBroadcastContent": string
  }
}


