import React from "react";
import firebase from "firebase";
import _ from "lodash";
import { observer } from "mobx-react";
import {ImageStore} from "../../stores/ImageStore";
import {Card} from "../components/Card";
import {GridContainer} from "../components/GridContainer";
import {Column} from "../components/Column";
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";


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

        values.map((x, index) => x.uid = uids[index])


        return (

            <div>

              <Header title="Gallery" height="30vh" />

              <GridContainer spacing>

                  {values.map(x => {
                      return (

                         <Column columnSize="6" key={x.url}>

                            <Card noOverlay image={x.url}/>

                         </Column>

                      )
                  })}

              </GridContainer>

                <Footer />

            </div>

        )
    }
})