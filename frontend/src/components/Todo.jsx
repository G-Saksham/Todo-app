export function Todo({todo}) {
    return <div>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <button 
                // onClick={() => {
                //     fetch("http://localhost:3000/completed",{
                //         method: "PUT",
                //         body: {
                //             id: "",
                //         }
                //       })
                //         .then(async (res) => {
                //           const json = await res.json();
                //         })
                // }}
        >{todo.completed ? "Done" : "Mark as Done"}</button>
    </div>
}