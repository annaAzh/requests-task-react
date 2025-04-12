import { Paths } from '@/shared/types';
import { Link } from 'react-router-dom';

const navLinks = [
  {
    id: 1,
    title: 'Страница заявок',
    path: Paths.REQUESTS,
  },
  {
    id: 2,
    title: 'Страница формы заявки',
    path: Paths.REQUESTS_NEW,
  },
];

export const Header = () => {
  return (
    <nav className="flex bg-slate-500 shadow-2xl justify-center py-4">
      <ul className="flex gap-x-10 justify-between items-center">
        {navLinks.map((link) => {
          return (
            <li
              key={link.id}
              className="uppercase font-bold text-black hover:text-slate-300 transition-all duration-300"
            >
              <Link to={link.path}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
