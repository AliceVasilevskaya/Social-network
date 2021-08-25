import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators';
import {createField,Textarea} from '../../../Assets/FormsControl/FormsControl';
import {Button} from "../../../Assets/Button/Button";

const MyPosts = React.memo(props => {

    let onAddPost = (e) => {
        props.addPost(e.newPostBody);
    }
    let postsElements = props.posts.map(p => <Post message={p.message}
                                                   key={p.id}
                                                   likes={p.likes}/>)
    return <div className={s.postsBlock}>
        <h3>Feed</h3>
        <div>
            <AddPostReduxForm onSubmit={onAddPost}/>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
})


//
// const AddPostForm = (props) => {
//     return (
//
//
//         </div>
//     </form>
//     )
// }

const maxLength300 = maxLengthCreator(300)
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField(Textarea,'Enter your message', 'newPostBody',
                [required, maxLength300],null,'text')}
            </div>
                <Button children={'Add Post'}/>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: "profileAddPostForm"}) (AddPostForm);

export default MyPosts;