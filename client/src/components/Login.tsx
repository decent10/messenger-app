type Props = {
    title?: string;
    value: string;
    onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onLogin: (event: React.SyntheticEvent) => void;
};

const Login = ({ title, onChange, value, onLogin }: Props) => (
    <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div
            className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg"
        >
            <h2 className="text-center font-semibold text-2xl lg:text-4xl text-gray-800">
                {title}
            </h2>
            <form className="mt-10" method="POST">
                <div className="col-span-6">
                    <label
                        htmlFor="street_address"
                        className="block text-sm font-medium text-gray-700"
                    >
                        User name
                    </label>
                    <input
                        onChange={onChange}
                        value={value}
                        id="user"
                        type="text"
                        name="user"
                        placeholder="type user name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border  border-gray-500 rounded p-2"
                    />
                </div>

                <button
                    onClick={onLogin}
                    className="w-full py-3 mt-10 flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
                >
                    Login
                </button>
            </form>
        </div>
    </div>
);
export default Login;
