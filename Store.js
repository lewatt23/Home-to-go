import * as React from 'react';

/**
 * If you want to share data between multiple root components, you'll need a
 * global store like Redux. This is similar to building a web app where you
 * want to synchronize data between a sidebar and a main view - just extended
 * into three dimensions.
 * To simplify this sample, we implement a trivial Redux-like store that will
 * ensure all of our elements are synchronized.
 */
const State = {
  posts: undefined,
  current: -1,
};

const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}

//function tha init all the api calls
export function initialize(apiKey,name) {

   //we search for name string
   const search = name?name:'Moscow';

    fetch(`http://api.opentripmap.com/0.1/en/places/geoname?name=${search}&apikey=${apiKey}`)
    .then(res =>res.json())
    .then(res =>{
           
      
         fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=${res.lon}6&lat=${res.lat}&rate=3h&format=json&limit=1&apikey=${apiKey}`)
         .then(resp=>resp.json())
         .then(resp=>{
  

            fetch(`http://api.opentripmap.com/0.1/en/places/xid/${resp[0].xid}?&apikey=${apiKey}`)
            .then(response => response.json())
            .then(body => {
              const entries = body;
           
              State.posts = entries;
              updateComponents();
            });

         }).catch(err=>{

            console.log(err);
            posts = {
                wikipedia_extracts:{
                    title:"Location not found",
                    text:"Location not found"
                },
                preview:{
                    source :''
                }
            }
    
    
            State.posts = posts
            updateComponents();

         })

    }).catch(err=>{
        
        console.log(err);
        posts = {
            wikipedia_extracts:{
                title:"Location not found",
                text:"Location not found"
            },
            preview:{
                source :''
            }
        }


        State.posts = posts
        updateComponents();



    })
}




export function setCurrent(value) {
  State.current = value;
  updateComponents();
}

export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      posts: State.posts,
      current: State.current,
    };

    _listener = () => {
      this.setState({
        posts: State.posts,
        current: State.current,
      });
    };

    componentDidMount() {
      listeners.add(this._listener);
    }

    componentWillUnmount() {
      listeners.delete(this._listener);
    }

    render() {
      return (
        <Component
          {...this.props}
          posts={this.state.posts}
          current={this.state.current}
        />
      );
    }
  };
} 