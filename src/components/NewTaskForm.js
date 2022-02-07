import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  
  function handleSubmit(e){
    e.preventDefault();
    const newItem = { text:text, category:category}
    onTaskFormSubmit(newItem);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category"
         value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(category => (
            <option key={category}>{category}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
