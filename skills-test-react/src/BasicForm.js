import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { Box, Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const BasicForm = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <h1>TODO</h1>
      <Formik
        initialValues={{
          todo: '',
        }}
        onSubmit={({ todo }, { resetForm }) => {
          if (todo.length <= 2) {
            return;
          }
          setTodos([...todos, { todo, id: uuidv4() }]);
          resetForm();
        }}
      >
        <Form>
          <label htmlFor="todo">Add ToDo </label>
          <Field id="todo" name="todo" placeholder="TextHere" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <div>
        <h2>Todos to do</h2>
        {todos.map((todo) => (
          <Box
            key={todo.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #ccc',
              justifyContent: 'space-between',
            }}
          >
            <p>{todo.todo}</p>
            <Button
              id={todo.id}
              onClick={(e) => {
                setTodos(todos.filter((todo) => todo.id !== e.target.id));
              }}
            >
              delete
            </Button>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default BasicForm;
