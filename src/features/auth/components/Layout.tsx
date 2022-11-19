import { Head } from '@/components/Head';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title = 'title info' }: LayoutProps) => {
  return (
    <>
      <Head title={title} description={title} />
      <div>
        <div className="relative min-h-screen grid ">
          <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
            <div
              className="sm:w-1/2 xl:w-3/5 bg-blue-500 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden  text-white bg-no-repeat bg-cover relative"
              style={{
                backgroundImage: 'url(https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png)',
              }}
            >
              <div className="absolute opacity-25 inset-0 z-0"></div>
              <div className="w-full  lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
                <div className=" font-bold leading-tight mb-6 mx-auto w-full content-center items-center ">
                  <svg viewBox="0 0 24 24" className=" text-white ml-3 w-auto lg:h-20 h-15 inline" fill="currentColor">
                    <g>
                      <path d="M2.826,5.803h14.682c0.238,0,0.432-0.193,0.432-0.432S17.746,4.94,17.508,4.94H2.826c-0.238,0-0.432,0.193-0.432,0.432S2.588,5.803,2.826,5.803 M4.553,4.076H15.78c0.239,0,0.432-0.193,0.432-0.432S16.02,3.212,15.78,3.212H4.553c-0.238,0-0.432,0.193-0.432,0.432S4.315,4.076,4.553,4.076 M15.78,14.439h-0.863c-0.238,0-0.432,0.193-0.432,0.432c0,0.239,0.193,0.432,0.432,0.432h0.863c0.239,0,0.432-0.192,0.432-0.432C16.212,14.633,16.02,14.439,15.78,14.439 M18.804,6.667H1.531c-0.477,0-0.864,0.387-0.864,0.864v8.636c0,0.478,0.387,0.863,0.864,0.863h17.273c0.476,0,0.863-0.386,0.863-0.863V7.531C19.667,7.054,19.279,6.667,18.804,6.667M1.962,7.531c0.238,0,0.432,0.193,0.432,0.432S2.201,8.394,1.962,8.394S1.531,8.201,1.531,7.962S1.724,7.531,1.962,7.531M1.962,16.167c-0.238,0-0.432-0.193-0.432-0.432s0.193-0.433,0.432-0.433s0.432,0.194,0.432,0.433S2.201,16.167,1.962,16.167M18.371,16.167c-0.238,0-0.432-0.193-0.432-0.432s0.193-0.433,0.432-0.433c0.239,0,0.433,0.194,0.433,0.433S18.61,16.167,18.371,16.167 M18.804,14.52c-0.137-0.049-0.28-0.08-0.433-0.08c-0.715,0-1.295,0.581-1.295,1.296c0,0.152,0.031,0.297,0.079,0.432H3.178c0.048-0.135,0.08-0.279,0.08-0.432c0-0.715-0.58-1.296-1.295-1.296c-0.152,0-0.296,0.031-0.432,0.08V9.178c0.136,0.049,0.279,0.08,0.432,0.08c0.716,0,1.295-0.58,1.295-1.295c0-0.152-0.031-0.296-0.08-0.432h13.977c-0.048,0.136-0.079,0.279-0.079,0.432c0,0.715,0.58,1.295,1.295,1.295c0.152,0,0.296-0.03,0.433-0.08V14.52z M18.371,8.394c-0.238,0-0.432-0.193-0.432-0.432s0.193-0.432,0.432-0.432c0.239,0,0.433,0.193,0.433,0.432S18.61,8.394,18.371,8.394 M10.167,8.394c-1.909,0-3.455,1.547-3.455,3.455c0,1.908,1.546,3.454,3.455,3.454c1.907,0,3.454-1.546,3.454-3.454C13.621,9.941,12.074,8.394,10.167,8.394 M11.099,11.228l-0.165,0.381H9.382c-0.004,0.02-0.006,0.047-0.006,0.084v0.136c0,0.104,0.002,0.164,0.006,0.185h1.462l-0.158,0.373H9.414c0.05,0.321,0.159,0.573,0.323,0.756c0.19,0.226,0.448,0.338,0.772,0.338c0.211,0,0.387-0.031,0.526-0.095c0.126-0.06,0.27-0.158,0.431-0.297v0.659c-0.288,0.175-0.606,0.262-0.957,0.262c-0.565,0-1.007-0.162-1.323-0.487c-0.275-0.281-0.446-0.659-0.513-1.136H8.185l0.171-0.373h0.285c-0.004-0.028-0.007-0.058-0.009-0.089c-0.002-0.032-0.003-0.066-0.003-0.102c0-0.027,0-0.06,0.003-0.096c0.002-0.034,0.005-0.075,0.009-0.118H8.185l0.164-0.381h0.336c0.105-0.455,0.297-0.816,0.576-1.081c0.325-0.306,0.741-0.458,1.248-0.458c0.367,0,0.743,0.123,1.128,0.368l-0.292,0.54c-0.271-0.252-0.566-0.379-0.886-0.379c-0.284,0-0.519,0.104-0.709,0.315c-0.16,0.186-0.268,0.417-0.323,0.694H11.099z M5.417,8.394H4.553c-0.238,0-0.432,0.194-0.432,0.432c0,0.239,0.193,0.432,0.432,0.432h0.864c0.238,0,0.432-0.193,0.432-0.432C5.849,8.588,5.655,8.394,5.417,8.394"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
              <div className="max-w-xl w-full space-y-12">
                <div className="lg:text-left text-center">
                  <h2 className="mt-6  font-bold">
                    <svg viewBox="0 0 24 24" className="h-11 w-auto inline" fill="currentColor">
                      <g>
                        <path d="M2.826,5.803h14.682c0.238,0,0.432-0.193,0.432-0.432S17.746,4.94,17.508,4.94H2.826c-0.238,0-0.432,0.193-0.432,0.432S2.588,5.803,2.826,5.803 M4.553,4.076H15.78c0.239,0,0.432-0.193,0.432-0.432S16.02,3.212,15.78,3.212H4.553c-0.238,0-0.432,0.193-0.432,0.432S4.315,4.076,4.553,4.076 M15.78,14.439h-0.863c-0.238,0-0.432,0.193-0.432,0.432c0,0.239,0.193,0.432,0.432,0.432h0.863c0.239,0,0.432-0.192,0.432-0.432C16.212,14.633,16.02,14.439,15.78,14.439 M18.804,6.667H1.531c-0.477,0-0.864,0.387-0.864,0.864v8.636c0,0.478,0.387,0.863,0.864,0.863h17.273c0.476,0,0.863-0.386,0.863-0.863V7.531C19.667,7.054,19.279,6.667,18.804,6.667M1.962,7.531c0.238,0,0.432,0.193,0.432,0.432S2.201,8.394,1.962,8.394S1.531,8.201,1.531,7.962S1.724,7.531,1.962,7.531M1.962,16.167c-0.238,0-0.432-0.193-0.432-0.432s0.193-0.433,0.432-0.433s0.432,0.194,0.432,0.433S2.201,16.167,1.962,16.167M18.371,16.167c-0.238,0-0.432-0.193-0.432-0.432s0.193-0.433,0.432-0.433c0.239,0,0.433,0.194,0.433,0.433S18.61,16.167,18.371,16.167 M18.804,14.52c-0.137-0.049-0.28-0.08-0.433-0.08c-0.715,0-1.295,0.581-1.295,1.296c0,0.152,0.031,0.297,0.079,0.432H3.178c0.048-0.135,0.08-0.279,0.08-0.432c0-0.715-0.58-1.296-1.295-1.296c-0.152,0-0.296,0.031-0.432,0.08V9.178c0.136,0.049,0.279,0.08,0.432,0.08c0.716,0,1.295-0.58,1.295-1.295c0-0.152-0.031-0.296-0.08-0.432h13.977c-0.048,0.136-0.079,0.279-0.079,0.432c0,0.715,0.58,1.295,1.295,1.295c0.152,0,0.296-0.03,0.433-0.08V14.52z M18.371,8.394c-0.238,0-0.432-0.193-0.432-0.432s0.193-0.432,0.432-0.432c0.239,0,0.433,0.193,0.433,0.432S18.61,8.394,18.371,8.394 M10.167,8.394c-1.909,0-3.455,1.547-3.455,3.455c0,1.908,1.546,3.454,3.455,3.454c1.907,0,3.454-1.546,3.454-3.454C13.621,9.941,12.074,8.394,10.167,8.394 M11.099,11.228l-0.165,0.381H9.382c-0.004,0.02-0.006,0.047-0.006,0.084v0.136c0,0.104,0.002,0.164,0.006,0.185h1.462l-0.158,0.373H9.414c0.05,0.321,0.159,0.573,0.323,0.756c0.19,0.226,0.448,0.338,0.772,0.338c0.211,0,0.387-0.031,0.526-0.095c0.126-0.06,0.27-0.158,0.431-0.297v0.659c-0.288,0.175-0.606,0.262-0.957,0.262c-0.565,0-1.007-0.162-1.323-0.487c-0.275-0.281-0.446-0.659-0.513-1.136H8.185l0.171-0.373h0.285c-0.004-0.028-0.007-0.058-0.009-0.089c-0.002-0.032-0.003-0.066-0.003-0.102c0-0.027,0-0.06,0.003-0.096c0.002-0.034,0.005-0.075,0.009-0.118H8.185l0.164-0.381h0.336c0.105-0.455,0.297-0.816,0.576-1.081c0.325-0.306,0.741-0.458,1.248-0.458c0.367,0,0.743,0.123,1.128,0.368l-0.292,0.54c-0.271-0.252-0.566-0.379-0.886-0.379c-0.284,0-0.519,0.104-0.709,0.315c-0.16,0.186-0.268,0.417-0.323,0.694H11.099z M5.417,8.394H4.553c-0.238,0-0.432,0.194-0.432,0.432c0,0.239,0.193,0.432,0.432,0.432h0.864c0.238,0,0.432-0.193,0.432-0.432C5.849,8.588,5.655,8.394,5.417,8.394"></path>
                      </g>
                    </svg>
                  </h2>
                  <h2 className="mt-6 text-7xl font-bold">Happening now</h2>
                  <p className="mt-10 text-4xl">{title}</p>
                </div>
                <div className="flex flex-row justify-center items-center space-x-3"></div>
                {children}
                <button
                  data-set-theme="winter"
                  className="btn btn-sm btn-ghost btn-square"
                  data-act-classname="btn-active"
                >
                  <svg
                    className="inline-block w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <title>ionicons-v5-q</title>
                    <path d="M256,118a22,22,0,0,1-22-22V48a22,22,0,0,1,44,0V96A22,22,0,0,1,256,118Z"></path>
                    <path d="M256,486a22,22,0,0,1-22-22V416a22,22,0,0,1,44,0v48A22,22,0,0,1,256,486Z"></path>
                    <path d="M369.14,164.86a22,22,0,0,1-15.56-37.55l33.94-33.94a22,22,0,0,1,31.11,31.11l-33.94,33.94A21.93,21.93,0,0,1,369.14,164.86Z"></path>
                    <path d="M108.92,425.08a22,22,0,0,1-15.55-37.56l33.94-33.94a22,22,0,1,1,31.11,31.11l-33.94,33.94A21.94,21.94,0,0,1,108.92,425.08Z"></path>
                    <path d="M464,278H416a22,22,0,0,1,0-44h48a22,22,0,0,1,0,44Z"></path>
                    <path d="M96,278H48a22,22,0,0,1,0-44H96a22,22,0,0,1,0,44Z"></path>
                    <path d="M403.08,425.08a21.94,21.94,0,0,1-15.56-6.45l-33.94-33.94a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.55,37.56Z"></path>
                    <path d="M142.86,164.86a21.89,21.89,0,0,1-15.55-6.44L93.37,124.48a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.56,37.55Z"></path>
                    <path d="M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z"></path>
                  </svg>
                </button>
                <button
                  data-set-theme="dark"
                  className="btn btn-sm btn-ghost btn-square"
                  data-act-classname="btn-active"
                >
                  <svg
                    className="inline-block w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <title>ionicons-v5-j</title>
                    <path d="M152.62,126.77c0-33,4.85-66.35,17.23-94.77C87.54,67.83,32,151.89,32,247.38,32,375.85,136.15,480,264.62,480c95.49,0,179.55-55.54,215.38-137.85-28.42,12.38-61.8,17.23-94.77,17.23C256.76,359.38,152.62,255.24,152.62,126.77Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
