import { date, datetime , etag, integer} from './common'

export type youtubeResoruce = {
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
      (key:string): {
        "url": string,
        "width": integer,
        "height": integer
      }
    },
    "channelTitle": string,
    "liveBroadcastContent": string
  }
}

export type youtubeList =
{
  "kind": "youtube#searchListResponse",
  "etag": etag,
  "nextPageToken": string,
  "prevPageToken": string,
  "regionCode": string,
  "pageInfo": {
    "totalResults": integer,
    "resultsPerPage": integer
  },
  "items": [
    youtubeResoruce
  ]
}


