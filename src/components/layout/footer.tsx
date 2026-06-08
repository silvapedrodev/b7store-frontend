"use client"

import { MenuItem } from "@/types/menu-item";
import Image from "next/image";
import Link from "next/link";
import { FooterButton } from "./footer-button";

export const Footer = () => {

  const menu: MenuItem[] = [
    { label: 'Camisas', href: '/categories/camisas' },
    { label: 'Acessórios', href: '/categories/acessorios' },
    { label: 'Kits B7Web', href: '/categories/kits' },
    { label: 'Eletrônicos', href: '/categories/eletronicos' },
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer>
      <div className="bg-white border-t border-gray-200 px-6 py-14">
        <div className="w-full max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center gap-6">
          <Image
            src={'/assets/ui/mail-send-line.png'}
            alt="email icon"
            width={68}
            height={68}
          />
          <div className="text-center md:text-left">
            <h3 className="font-medium text-2xl mb-6 md:mb-1">Fique por dentro das promoções!</h3>
            <p className="text-gray-400">Coloque seu e-mail e seja o primeiro a saber</p>
          </div>
          <form method="post" className="w-full flex-1 flex flex-col md:flex-row gap-6 md:gap-4">
            <input
              type="email"
              className="flex-1 border border-gray-200 rounded-sm px-6 py-5 outline-none"
              placeholder="Qual seu e-mail?"
            />
            <input
              type="submit"
              value="Enviar"
              className="w-full md:w-48 bg-blue-600 text-white px-6 py-5 border-0 rounded-sm"
            />
          </form>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-16 md:py-10 border-b border-gray-700">
            <Link href="/">
              <Image
                src={'/assets/ui/logo-white.png'}
                alt="B7Store"
                width={143}
                height={48}
              />
            </Link>
            <ul className="flex flex-col md:flex-row gap-8 items-center">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col md:flex-row gap-6 py-16 md:py-10 border-b border-gray-700">
            <div className="flex-1">
              <h4 className="mb-6 text-center md:text-left">Precisa de ajuda?</h4>
              <div className="flex flex-col md:flex-row gap-6">
                <FooterButton
                  href="mailto:email@email.com.br"
                  icon="/assets/ui/mail-line.png"
                  label="suporte@email.com.br"
                />
                <FooterButton
                  href="#"
                  icon="/assets/ui/phone-line.png"
                  label="(99) 99999-9999"
                />
              </div>
            </div>
            <div>
              <h4 className="mb-6 text-center md:text-left">Acompanhe nas redes sociais</h4>
              <div className="flex flex-row justify-between gap-6">
                <FooterButton
                  href=""
                  icon="/assets/ui/instagram-line.png"
                />
                <FooterButton
                  href=""
                  icon="/assets/ui/linkedin-line.png"
                />
                <FooterButton
                  href=""
                  icon="/assets/ui/facebook-line.png"
                />
                <FooterButton
                  href=""
                  icon="/assets/ui/twitter-x-fill.png"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-14 justify-between items-center py-16 md:py-10">
            <p className="text-lg text-center md:text-left">Se você leu isso aqui, saiba que está no caminho certo!
              Continue estudando e você chegará lá...</p>
            <div className="flex justify-center">
              <FooterButton
                icon="/assets/ui/arrow-up-line.png"
                onClick={scrollToTop}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}