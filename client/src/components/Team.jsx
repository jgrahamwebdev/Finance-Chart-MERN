
const people = [
    {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        imageUrl: './imgs/team-1.jpg',
    },
    {
        name: 'Dries Vincent',
        role: 'Co-Founder / COO',
        imageUrl: './imgs/team-2.jpg',
    },
    {
        name: 'Lindsay Walton',
        role: 'Head Advisor',
        imageUrl: './imgs/team-3.jpg',
    },
    {
        name: 'Leonard Krasner',
        role: 'Director of Product',
        imageUrl: './imgs/team-4.jpg',
    },
    {
        name: 'Emma Selman',
        role: 'Human Resources',
        imageUrl: './imgs/team-5.jpg',
    },
    {
        name: 'Anna Roberts',
        role: 'Business / Public Relations',
        imageUrl: './imgs/team-6.jpg',
    },
    {
        name: 'Benjamin Russel',
        role: 'Head Financial Advisor',
        imageUrl: './imgs/team-7.jpg',
    },
    {
        name: 'Tom Wilson',
        role: 'Head Financial Advisor',
        imageUrl: './imgs/team-8.jpg',
    },
    {
        name: 'James Francis',
        role: 'Financial Advisor',
        imageUrl: './imgs/team-9.jpg',
    },
    {
        name: 'Kristin Watson',
        role: 'Financial Advisor',
        imageUrl: './imgs/team-10.jpg',
    },
    {
        name: 'Austin Miles',
        role: 'Financial Advisor',
        imageUrl: './imgs/team-11.jpg',
    },
    {
        name: 'Henry Song',
        role: 'Financial Advisor',
        imageUrl: './imgs/team-12.jpg',
    },
    {
        name: 'Christina Davis',
        role: 'Financial Advisor',
        imageUrl: './imgs/team-13.jpg',
    },
    {
        name: 'Clay Elliot',
        role: 'Financial Advisor',
        imageUrl: './imgs/team-14.jpg',
    },
]

const Team = () => {
    return (
        <div className="bg-white pb-[3rem]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="mx-auto h-24 w-24 rounded-full overflow-hidden">
                <img className="object-cover" src={person.imageUrl} alt="" />
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
}

export default Team
