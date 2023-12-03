import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts = [
    {
      id: 123456789,
      content: 'Günaydın büyük Fenerbahçe taraftarı...',
      type: 'photo',
      photos: [
        'https://www.trtspor.com.tr/resimler/520000/520109.jpg',
        'https://media04.ligtv.com.tr/img/news/2023/10/11/fenerbahce-istatistikleri-altust-etti-ligde-ve-avrupada/748_416/fenerbahce-istatistik.jpg',
      ],
      account: {
        avatar: 'https://i.imgur.com/fqqSd.jpg',
        username: 'krALEX',
        fullName: 'Alex De Souza',
        isVerified: true,
      },
      stats: {
        comments: 4350,
        repost: 12,
        like: 190007,
        view: 1907,
      },
    },
    {
      id: 123213123123,
      content: 'En Sevdiğiniz Futbolcu',
      type: 'poll',
      poll: {
        voted: false,
        totalVote: 298,
        deadline: 5,
        answer: [
          { id: 1, title: 'Dusan Tadic', vote: 102, voted: false },
          { id: 2, title: 'Edin Dzeko', vote: 88, voted: false },
          { id: 3, title: 'Sebastian Szymański', vote: 108, voted: false },
        ],
      },

      account: {
        avatar: 'https://i.imgur.com/fqqSd.jpg',
        username: 'krALEX',
        fullName: 'Alex De Souza',
        isVerified: true,
      },
      stats: {
        comments: 4350,
        repost: 12,
        like: 190007,
        view: 1907,
      },
    },
    {
      id: 789107119,
      content: 'Nasılsınız bügün gençler',
      type: 'photo',
      photos: [
        'https://cdn1.img.sputniknews.com.tr/img/07e6/06/16/1057756663_0:35:1201:710_1920x0_80_0_0_9635cceee24842d9c092d59d3a626b41.jpg',
      ],
      account: {
        avatar:
          'https://pbs.twimg.com/profile_images/1642802069663784961/R0o_riAt_400x400.jpg',
        username: 'ozdagim',
        fullName: 'Ümit Özdağ',
        isVerified: true,
      },
      stats: {
        comments: 4350,
        repost: 12,
        like: 190007,
        view: 1907,
      },
    },
    {
      id: 1221312,
      content: '...',
      type: 'photo',
      photos: [
        'https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2023/06/27/1162396-1990043064.jpg?itok=My5Zw4eD',
        'https://people.com/thmb/JdBfW6Bkq8U9lVc8HwqUTSdJ8LE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(687x479:689x481)/zendaya-1-0d948b4c105841c2aa2cf7282fe2a466.jpg',
        'https://people.com/thmb/_JuZXl0mn-v7ZpyxrOCHcyfOfMo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(503x182:505x184)/Zendaya-Tom-holland-090322-23dd3d569d674a9e9eef9ec89be9715a.jpg',
      ],
      account: {
        avatar:
          'https://i.pinimg.com/736x/36/12/54/361254339e5e52dbc7fad800d7d02142.jpg',
        username: 'yourfriendzendaya',
        fullName: 'zendaya',
        isVerified: true,
      },
      stats: {
        comments: 4350,
        repost: 12,
        like: 190007,
        view: 1907,
      },
    },
    {
      id: 3213213213,
      content: 'günaydın',
      type: 'text',
      photos: [],
      account: {
        avatar:
          'https://www.houseofwellness.com.au/wp-content/uploads/2023/01/vanilla-girl-make-up.jpg',
        username: 'bloggergirl',
        isVerified: false,
        fullName: 'Jennifer',
      },
      stats: {
        comments: 4350,
        repost: 12,
        like: 190007,
        view: 1907,
      },
    },
    {
      id: 213213123123213,
      content: 'lelelele',
      type: 'photo',
      photos: [
        'https://assetsio.reedpopcdn.com/the-witcher-3-best-rpgs.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp',
        'https://www.gaminginturkey.com/wp-content/uploads/2023/05/enis-kirazoglu-ile-anomaly-agent-1.png',
        'https://i.ytimg.com/vi/HtUEVwtWd14/maxresdefault.jpg',
        'https://www.svg.com/img/gallery/this-god-of-war-clone-is-raising-eyebrows/l-intro-1659535486.jpg',
      ],
      account: {
        avatar:
          'https://forum.donanimarsivi.com/data/avatars/o/28/28425.jpg?1594922725',
        username: 'eniskirazoglu',
        isVerified: true,
        fullName: 'Enis Kirazoğlı',
      },
      stats: {
        comments: 120,
        repost: 8,
        like: 25000,
        view: 50879,
      },
    },
  ];

  constructor() {}

  getAllPost() {
    return this.posts;
  }

  votePost(postId: number, voteId: number) {
    const selectedPost = this.posts.find((post) => post.id === postId);
    if (selectedPost?.poll?.totalVote !== undefined) {
      selectedPost.poll.totalVote++;
      selectedPost.poll.voted = true;
    }
    selectedPost?.poll?.answer.find((p) => {
      if (p.id == voteId) {
        p.vote++;
        p.voted = true;
      }
    });
  }
}
