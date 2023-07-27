CREATE TABLE todos ( 
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status ENUM('Todo', 'In Progress', 'Done') DEFAULT 'Todo',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

INSERT INTO todos (title, description, status) VALUES
  ('Task 1', 'This is task 1', 'Todo'),
  ('Task 2', 'This is task 2', 'In Progress'),
  ('Task 3', 'This is task 3', 'Done');
