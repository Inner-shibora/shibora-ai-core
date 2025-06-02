// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full px-6 py-8 bg-black border-t border-gray-800 text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} SHIBORA AI – All rights reserved.
    </footer>
  );
}
