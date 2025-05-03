import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Layout from './layout/Layout.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ZMagazyn } from './magazyn/ZMagazyn.tsx';
import { DDMagazyn } from './magazyn/DDMagazyn.tsx';
import { ZProdukcyjne } from './produkcja/ZProdukcyjne.tsx';
import { Faktura } from './ksiegowosc/Faktura.tsx';
import { Faktury } from './ksiegowosc/Faktury.tsx';
import { DZlecenie } from './produkcja/DZlecenie.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                <Route path="/magazyn" element={<Layout />}>
                    <Route index element={<ZMagazyn />} />
                </Route>
                <Route path="/dodajmagazyn" element={<Layout />}>
                    <Route index element={<DDMagazyn />} />
                </Route>
                <Route path="/zlecenia" element={<Layout />}>
                    <Route index element={<ZProdukcyjne />} />
                </Route>
                <Route path="/faktura" element={<Layout />}>
                    <Route index element={<Faktura />} />
                </Route>
                <Route path="/faktury" element={<Layout />}>
                    <Route index element={<Faktury />} />
                </Route>
                <Route path="/dodajzlecenie" element={<Layout />}>
                    <Route index element={<DZlecenie />} />
                </Route>
                <Route path="/zlecenia" element={<Layout />}>
                    <Route index element={<ZProdukcyjne />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
