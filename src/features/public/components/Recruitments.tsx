import { Button } from '@/components/Elements/Button';

export const Recruitments = () => {
  const numList: number[] = [1, 2, 3, 4, 5, 6];
  return (
    <div className="space-y-2 md:space-y-6">
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h1 className="md:text-3xl font-extrabold">Recruitments</h1>
        </div>
      </div>
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <div className="flex flex-wrap -mx-4">
            {numList.map((item) => {
              return (
                <div className="w-full md:w-1/2 lg:w-1/3 px-4" key={item}>
                  <div className="max-w-[370px] mx-auto mb-10">
                    <div className="rounded overflow-hidden mb-6">
                      <img
                        src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <div>
                      <div className="flex justify-start gap-x-2 pb-2">
                        <div className="badge">釣り</div>
                        <div className="badge badge-primary">都内</div>
                        <div className="badge badge-secondary">少人数</div>
                      </div>
                      <h3>
                        <a
                          href="https://exznpl.com"
                          className="
                             font-semibold
                             text-xl
                             sm:text-2xl
                             lg:text-xl
                             xl:text-2xl
                             mb-4
                             inline-block
                             text-dark
                             hover:text-primary"
                        >
                          募集のタイトルになる
                        </a>
                      </h3>
                      <div className="flex justify-between">
                        <div className="flex">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                            ></path>
                          </svg>
                          報酬詳細
                        </div>
                        <div className="flex">
                          <svg
                            className="w-6 h-6 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            ></path>
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                          </svg>
                          <span>都内d</span>
                        </div>
                      </div>
                      <div className="mt-6 grid grid-cols-2">
                        <div className="flex items-center">
                          <div className="relative">
                            <div className="h-6 w-6 rounded-full bg-gray-200 md:h-8 md:w-8"></div>
                            <span className="bg-primary-red absolute top-0 right-0 inline-block h-3 w-3 rounded-full"></span>
                          </div>

                          <div className="ml-2">田中一郎</div>
                        </div>

                        <div className="flex justify-end">
                          <Button size="sm">詳細</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="btn-group">
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn btn-disabled">...</button>
          <button className="btn">99</button>
          <button className="btn">100</button>
        </div>
      </div>
    </div>
  );
};
