
const intialState=false



export const themereducer=(state=intialState,action)=>{

if(action.type==='change_theme')
{
 return action.payload

}
    return state
}