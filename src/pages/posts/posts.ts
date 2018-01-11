import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { Post } from '../../models/post.interface';

import { DataProvider } from '../../providers/data/data';

@IonicPage({
  // name: 'posts',
  segment: 'posts'
})
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  posts: Observable<Array<Post>>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataProvider ) {
    this.getPosts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsPage');
  }

  getPosts() {
    this.posts = this.data.getPosts();
  }

  navigateToDetail(postId: number) {
    this.navCtrl.push( 'PostDetailPage', { postId: postId } );
  }

}
