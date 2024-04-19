import { Routes, Route } from 'react-router-dom';
import './globals.css';

const App = () => {
    return (
        <main className="flex h-screen">
            <Routes>
                {/* public routes */}
                <Route path="/sign-in" element={<SigninForm />} />
                {/* private routes */}
                <Route index element = {<Home />}/>
            </Routes>
            <div>
                <h1 className="text-3xl font-bold underline">
                    My Digital Diary
                </h1>
            </div>
        </main>
    )
}

export default App