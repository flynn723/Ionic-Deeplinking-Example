import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../../models/post.interface';


@IonicPage({
  segment: 'posts/:postId',
  defaultHistory: ['PostsPage']
})
@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
})
export class PostDetailPage {

  private postId: number
  private post: Observable<Post>;

  constructor(
    private data: DataProvider,
    public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController ) {
  }

  ionViewDidLoad() {
    this.viewCtrl.showBackButton(true);
    this.postId = this.navParams.get('postId');
    console.log(this.postId);
    this.post = this.data.getPostById(this.postId);
  }

}
