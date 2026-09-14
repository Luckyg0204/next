export const revalidate = 20;

export default function Posts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',)

    const data = await response.json();
  
    return(
        <div>
            <button></button>
            <p></p>
        </div>
    )
}
// hi this is me 