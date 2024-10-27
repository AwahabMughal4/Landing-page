const posts = [
    {
      id: 1,
      title: 'Enhance your development skills',
      href: '#',
      description:
        'Discover the best practices in software development, improve code quality, and streamline workflows for optimal productivity.',
      date: 'Oct 20, 2024',
      datetime: '2024-10-20',
      category: { title: 'Development', href: '#' },
      author: {
        name: 'Abdul Wahab Mughal',
        role: 'FullStack PHP Developer',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 2,
      title: 'Master Linux for development',
      href: '#',
      description:
        'Learn how to leverage Linux for efficient development setups, server management, and system customization for developers.',
      date: 'Oct 18, 2024',
      datetime: '2024-10-18',
      category: { title: 'Linux', href: '#' },
      author: {
        name: 'Jane Doe',
        role: 'Linux Specialist',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1523748731624-d7f7cda67eb9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 3,
      title: 'Effective Project Management for IT',
      href: '#',
      description:
        'Insights on how to manage complex IT projects, collaborate with teams, and deliver quality products on time.',
      date: 'Oct 15, 2024',
      datetime: '2024-10-15',
      category: { title: 'Project Management', href: '#' },
      author: {
        name: 'John Smith',
        role: 'Project Manager',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1506708687599-e9cfb7b4d7c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ];
  
  export default function Example() {
    return (
      <div className="py-4 bg-slate-900 sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-4xl font-extrabold tracking-tight text-yellow-400 transition duration-500 ease-in-out transform sm:text-5xl hover:scale-105">
              From the Blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-400">
              Insights and expertise to help you excel in software development and IT.
            </p>
          </div>
          <div className="grid max-w-2xl grid-cols-1 pt-10 pb-2 mx-auto mt-10 rounded-lg shadow-md shadow-teal-500 gap-x-6 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col items-start justify-between max-w-xl p-6 transition-transform duration-300 ease-in-out transform rounded-lg shadow-lg bg-zinc-800 hover:scale-105 hover:bg-yellow-800"
              >
                <div className="flex items-center text-xs gap-x-4">
                  <time dateTime={post.datetime} className="text-yellow-300 transition duration-300 ease-in-out hover:text-zinc-900">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-yellow-600 px-3 py-1.5 font-medium text-white transition duration-300 ease-in-out hover:bg-yellow-500"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="relative mt-4 group">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-yellow-300 transition duration-300 ease-in-out group-hover:text-gray-300">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400 transition duration-300 ease-in-out line-clamp-3 group-hover:text-gray-300">
                    {post.description}
                  </p>
                </div>
                <div className="relative flex items-center mt-8 gap-x-4">
                  <img alt={`Profile of ${post.author.name}`} src={post.author.imageUrl} className="w-10 h-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-yellow-300 transition duration-300 ease-in-out group-hover:text-gray-300">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-400 transition duration-300 ease-in-out group-hover:text-gray-300">
                      {post.author.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }
  