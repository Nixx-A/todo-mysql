import { useState } from 'react'
import Modal from './Modal'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useTodo } from '../context/todoContext'
import { Formik, Form } from 'formik'

export default function CreateTodo () {
  const { createTodo } = useTodo()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [todo, setTodo] = useState({
    title: '',
    description: '',
    status: 'Todo'
  })

  const toogleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <>
      <button
        onClick={toogleModal}
        className='text-md rounded bg-primary-500 m-4 text-secondary-100 px-2 py-0.5 hover:bg-primary-600 duration-150'>
        Create Todo
      </button>
      <Modal
        isOpen={isModalOpen}
        styles='bg-tertiary-100 modal-dialog w-[50%] h-[60%] overflow-y-auto'>

        <AiFillCloseCircle
          onClick={toogleModal}
          className='cursor-pointer text-2xl m-2'
        />
        <Formik
          initialValues={todo}
          enableReinitialize={true}
          onSubmit={async values => {
            console.log(values)


            if(values.title.length === 0) return console.log('no podes ');

            createTodo(values)
            toogleModal()
            setTodo({
              title: '',
              description: '',
              status: 'Todo'
            })

          }}>


          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form onSubmit={handleSubmit} className='bg-tertiary-100'>
              <h1 className='text-center text-2xl font-semibold'>Add todo</h1>
              <div className='flex flex-col gap-1 items-center mt-6'>

                <div className='flex flex-col w-1/2'>
                  <label className='font-semibold text-sm'>Title</label>
                  <input type='text' name='title' placeholder="Write a title" onChange={handleChange} value={values.title} />
                </div>

                <div className='flex flex-col w-1/2 mt-2'>
                  <label className='font-semibold text-sm'>Description</label>
                  <textarea type='text' name='description' placeholder='Write a description...' onChange={handleChange} rows={3} value={values.description} />
                </div>

                <div className='flex flex-col w-1/2 mt-2'>
                  <label className='font-semibold text-sm' status>Status</label>
                  <select name='status' onChange={handleChange} value={values.status}>
                    <option value='Todo'>Todo</option>
                    <option value='In Progress'>In Progress</option>
                    <option value='Done'>Done</option>
                  </select>
                </div>
                <button type='submit' className='text-md rounded bg-primary-500 m-4 text-secondary-100 w-1/2 px-2 py-0.5 hover:bg-primary-600 duration-150 disabled:text-primary-800' disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  )
}
