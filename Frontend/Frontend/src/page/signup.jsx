import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium">Name</label>
            <input id="name" type="text" placeholder="Enter your name" required className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium">Email</label>
            <input id="email" type="email" placeholder="Enter your email" required className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium">Password</label>
            <input id="password" type="password" placeholder="Enter your password" required className="w-full p-2 border rounded" />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded" type="submit">Sign Up</button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account? 
          <Link to="/" className="text-blue-500 ml-1 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}