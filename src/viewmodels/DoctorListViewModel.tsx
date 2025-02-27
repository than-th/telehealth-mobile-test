import { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Doctor, doctorsData } from '../models/doctor';
import { DefaultNavigationProps } from '../navigation/navigation';

export type Category = 'All' | 'Doctor' | 'Dentist' | 'Pharmacist';
type DoctorListProps = DefaultNavigationProps<'DoctorListPage'>;

export const useDoctorListViewModel = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const navigation = useNavigation<DoctorListProps['navigation']>();

  useEffect(() => {
    const filterDoctors = () => {
      return doctorsData.filter(doctor => {
        const matchesCategory =
          selectedCategory === 'All' || doctor.category === selectedCategory;
        return matchesCategory;
      });
    };

    setFilteredDoctors(filterDoctors());
  }, [selectedCategory]);

  const setCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  const categoryToThai: Record<Category, string> = {
    All: 'ทั้งหมด',
    Doctor: 'แพทย์',
    Dentist: 'ทันตแพทย์',
    Pharmacist: 'เภสัชกร',
  };

  const goBack = () => {
    navigation.goBack();
  };

  return {
    filteredDoctors,
    selectedCategory,
    setCategory,
    categoryToThai,
    goBack,
  };
};
