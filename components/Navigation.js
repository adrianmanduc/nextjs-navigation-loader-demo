import Link from 'next/link';
import { random } from '../utils';

const NAV_ITEMS = [
  {label: "SSR Page 1", href: "/ssr-page/1"},
  {label: "SSR Page 2", href: "/ssr-page/2"},
  {label: "SSR Page Fast", href: "/ssr-page/fast"},
  {label: "ISR Page 1", href: "/isr-page/1"},
  {label: "ISR Page No Prefetch", href: "/isr-page/3"},
  {label: "ISR Page No Prefetch (Random)", href: "/isr-page/", isRandom: true},
];

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        {NAV_ITEMS.map(item => <li key={item.label}><NavigationLink {...item}/></li>)}
      </ul>
    </nav>
  );
};

function NavigationLink(props) {
  const {href, label, isRandom = false, prefetch} = props;
  return <Link href={isRandom ? `${href}${random(3, 15000)}` : href} prefetch={prefetch}><a>{label}</a></Link>;
}