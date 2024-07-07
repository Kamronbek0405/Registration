import { useForm } from 'react-hook-form';
import './App.css';
import { PaswordCode } from './components/password/paswordCode';
function App() {
  const { handleSubmit, reset, register, formState: { errors } } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div className='registration flex items-center justify-center h-[100vh]'>
      <form  className=' register__from w-[450px] h-[500px]   flex items-center justify-start flex-col   shadow-lg   shadow-cyan-500/50 rounded-2xl' onSubmit={handleSubmit(submit)}>
        <h1 className='mt-10 text-3xl  font-bold '>Registration</h1>
        <div className=''>
          <input className='border-solid border-2 mt-10 border-black outline-slate-400  w-[300px] h-10 rounded-md px-2' {...register('userName', { required: true })} type="text"  placeholder='ismingizni kiriting'/>
          {errors.userName && <p className='text-red-700'>Malumot kiritmadingiz</p>}
        </div>
        <div className='py-2'>
          <input className='border-solid border-2 border-black outline-slate-400 w-[300px] h-10  rounded-md px-2' {...register('age', { required: true })} type="number"  placeholder='yoshingiz'/>
          {errors.age && <p className='text-red-700'>Malumot kiritmadingiz</p>}
        </div>
        <div className=''>
          <input className='border-solid border-2 border-black outline-slate-400 w-[300px] h-10  rounded-md px-2' {...register('password', { required: true })} type="password" placeholder='parol kiriting'/>
          {errors.password && <p className='text-red-700'>Malumot kiritmadingiz</p>}
        </div>
        <div>
          <PaswordCode  />
        </div>
        <button className='bg-blue-400 mt-10 w-[100px] h-9 rounded-md  hover:shadow-blue-600   shadow-lg hover:text-white'   type='submit'>send</button>
      </form>
    </div>
  );
}

export default App;