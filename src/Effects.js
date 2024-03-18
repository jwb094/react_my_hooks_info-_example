import React,{useState,useEffect} from 'react';

function Effects () {

    const [resourceType,setResourceType] = useState('posts');
    const [items,setitems] = useState([]);
    console.log('render');

    useEffect(() => {
      console.log('resource changed')

            //** return clean code -unmount */
      /** anything that is updatede */
      //[if variable in brackets the useffect will be change when it has benn updated/change]
        return () => {
          console.log('return from resource changed')
        }
    }, [resourceType])
    
  return (
  <>
    <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>comments</button>
    </div>
    <h1>{resourceType}</h1>
    
  </>
  )
}


export default Effects