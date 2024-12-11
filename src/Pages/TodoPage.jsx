import React from 'react'

const TodoPage = () => {
  return (
    <section className="sectiontodo">
        <div className="container">
            <div className="sectiontodo_box">
                <h1 className="sectiontodo_h1">Todo List</h1>
                <div className="flex">
                    <div>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <button type="button" className="btn">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TodoPage;