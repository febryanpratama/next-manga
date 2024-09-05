// context/PackageContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PackageType {
  id: number;
  name: string;
  price: number;
  duration: number;
  DetailPackage?: { description: string }[];
}

interface PackageContextType {
  selectedPackage: PackageType | null;
  setSelectedPackage: (pkg: PackageType | null) => void;
}

const PackageContext = createContext<PackageContextType | undefined>(undefined);

export const usePackage = (): PackageContextType => {
  const context = useContext(PackageContext);
  if (!context) {
    throw new Error('usePackage must be used within a PackageProvider');
  }
  return context;
};

interface PackageProviderProps {
  children: ReactNode;
}

export const PackageProvider: React.FC<PackageProviderProps> = ({ children }) => {
  const [selectedPackage, setSelectedPackage] = useState<PackageType | null>(null);

  // Log the selected package to debug
  React.useEffect(() => {
    console.log("Selected Package updated:", selectedPackage);
  }, [selectedPackage]);

  return (
    <PackageContext.Provider value={{ selectedPackage, setSelectedPackage }}>
      {children}
    </PackageContext.Provider>
  );
};
