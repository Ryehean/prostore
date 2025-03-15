"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { SunIcon, MoonIcon, SunMoon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"


export function ModeToggle() {
    const [mounted, setmounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
      setmounted(true);
    }, []);
    
    if (!mounted) {
        return null;
    }

  return (
    <DropdownMenu>

      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="focus-visible:ring-0 focus-visible:ring-offset-0" size="icon">
          {theme ==='system' ? (
            <SunMoon />) : 
            theme === 'dark' ? (
            <MoonIcon />) : 
            (<SunIcon />)}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem checked={ theme==='light'} onClick={() => setTheme("light")}>
          Light
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={ theme==='dark'} onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={ theme==='system'}  onClick={() => setTheme("system")}>
          System
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
