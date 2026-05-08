export interface IndustrialZone {
  id: string;
  name: string;
  province: string;
  type: 'IEAT' | 'PRIVATE' | 'SEZ';
  isEEC: boolean;
}

export const industrialZones: IndustrialZone[] = [
  { id: 'MTP', name: 'Map Ta Phut Industrial Estate', province: 'Rayong', type: 'IEAT', isEEC: true },
  { id: 'AMT-RY', name: 'Amata City Rayong', province: 'Rayong', type: 'PRIVATE', isEEC: true },
  { id: 'AMT-CH', name: 'Amata City Chonburi', province: 'Chonburi', type: 'PRIVATE', isEEC: true },
  { id: 'WHA-ES', name: 'WHA Eastern Seaboard Industrial Estate', province: 'Rayong', type: 'PRIVATE', isEEC: true },
  { id: 'LPB', name: 'Laem Chabang Industrial Estate', province: 'Chonburi', type: 'IEAT', isEEC: true },
  { id: 'BPC', name: 'Bang Pa-in Industrial Estate', province: 'Phra Nakhon Si Ayutthaya', type: 'IEAT', isEEC: false },
  { id: 'BPN', name: 'Bangpoo Industrial Estate', province: 'Samut Prakan', type: 'IEAT', isEEC: false },
  { id: 'NIP', name: 'Navanakorn Industrial Promotion Zone', province: 'Pathum Thani', type: 'PRIVATE', isEEC: false },
];

export const getZonesByProvince = (province: string) => industrialZones.filter(z => z.province === province);
export const getEECZones = () => industrialZones.filter(z => z.isEEC);
export const getZonesByType = (type: IndustrialZone['type']) => industrialZones.filter(z => z.type === type);
