export type Region = 'CENTRAL' | 'NORTH' | 'NORTHEAST' | 'SOUTH' | 'EAST' | 'WEST';

export interface Province {
  id: string;
  nameEn: string;
  nameTh: string;
  region: Region;
  isEEC?: boolean;
}

export const provinces: Province[] = [
  { id: 'BKK', nameEn: 'Bangkok', nameTh: 'กรุงเทพมหานคร', region: 'CENTRAL' },
  { id: 'RYG', nameEn: 'Rayong', nameTh: 'ระยอง', region: 'EAST', isEEC: true },
  { id: 'CHB', nameEn: 'Chonburi', nameTh: 'ชลบุรี', region: 'EAST', isEEC: true },
  { id: 'CCO', nameEn: 'Chachoengsao', nameTh: 'ฉะเชิงเทรา', region: 'EAST', isEEC: true },
  { id: 'SPK', nameEn: 'Samut Prakan', nameTh: 'สมุทรปราการ', region: 'CENTRAL' },
  { id: 'PTH', nameEn: 'Pathum Thani', nameTh: 'ปทุมธานี', region: 'CENTRAL' },
  { id: 'NON', nameEn: 'Nonthaburi', nameTh: 'นนทบุรี', region: 'CENTRAL' },
  { id: 'AYU', nameEn: 'Phra Nakhon Si Ayutthaya', nameTh: 'พระนครศรีอยุธยา', region: 'CENTRAL' },
  { id: 'CMI', nameEn: 'Chiang Mai', nameTh: 'เชียงใหม่', region: 'NORTH' },
  { id: 'HKT', nameEn: 'Phuket', nameTh: 'ภูเก็ต', region: 'SOUTH' },
  { id: 'NMA', nameEn: 'Nakhon Ratchasima', nameTh: 'นครราชสีมา', region: 'NORTHEAST' },
  { id: 'KKN', nameEn: 'Khon Kaen', nameTh: 'ขอนแก่น', region: 'NORTHEAST' },
  { id: 'STN', nameEn: 'Surat Thani', nameTh: 'สุราษฎร์ธานี', region: 'SOUTH' },
  { id: 'SKN', nameEn: 'Songkhla', nameTh: 'สงขลา', region: 'SOUTH' },
];

export const getProvinceById = (id: string) => provinces.find(p => p.id === id);
export const getProvincesByRegion = (region: Region) => provinces.filter(p => p.region === region);
export const getEECProvinces = () => provinces.filter(p => p.isEEC);
