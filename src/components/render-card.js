import React from 'react';
import {MediaCard} from './small-component/RenderCard-FillingCard';
import Grid from '@material-ui/core/Grid';


export default class RenderCards extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        data: [],
      }
      this.link = 'https://spreadsheets.google.com/feeds/list/1JIuV-NlPAC93DTqVOdh50MuFSH8h0o8KnphSQ2YxTko/od6/public/values?alt=json';
      this.loadCards();
    }

    loadCards(){
      fetch(this.link).then(d=> d.json()).then(msgs=> {
        console.log(msgs);
        const data = msgs.feed.entry.map(el=> {
          return {
            id : el.gsx$id.$t,
            img : el.gsx$img.$t,
            name : el.gsx$name.$t,
            describe : el.gsx$describe.$t,
            price : el.gsx$price.$t,
            tag: el.gsx$sorttag.$t
          }
        });
        console.log(data);
        this.setState({data});
      });
    }

    render(){
      return (
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          {this.state.data.map((msg)=> <MediaCard data={msg} key={msg.id} />)}
        </Grid>
        );
    }

}
