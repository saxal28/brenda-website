import React from "react";
import firebase from "firebase";
import _ from "lodash";
import { observer } from "mobx-react";
import {ImageStore} from "../../stores/ImageStore";
import FileUploader from 'react-firebase-file-uploader';

// import {UploadButton} from "./common/UploadButton";

const store = new ImageStore();

export default observer(class GalleryListSection extends React.Component {

    componentWillMount() {

        firebase.database().ref("images").on("value", snapshot => {
            store.content = snapshot.val();
        })

    }

    render() {

        let { content } = store;
        const uids = _.keys(content);
        const values = _.values(content);

        values.map((x, index) => {
            x.uid = uids[index];
        })

        console.log(values)

        return (

            <section className="gallery-list">

                <div className="container">

                    <div className="row">
                        {values.map(x => {
                            return (
                                <div className="card" style={{background: `url(${x.url})`}}>
                                    <h1>hi</h1>
                                </div>
                            )
                        })}
                    </div>


                </div>

            </section>
        )
    }
})