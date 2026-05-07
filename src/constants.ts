export interface Guest {
  name: string;
  table: number;
}

export const SEATING_DATA: Record<number, string[]> = {
  1: ["Maurice", "Kathy", "David", "Jessica", "Cameron", "Tristan"],
  2: ["Ayesha", "Saif", "Arham", "Islah", "Sadaf", "Nida", "Amira", "Reshma"],
  3: ["Tareq Aldajani", "Rand", "Yousef Aldajani", "Muhammad Aldajani", "Salam Al Nahhas", "Yasser", "Talia", "Lana", "Asmaa Al Nahhas"],
  4: ["Sevilay", "Filsan", "Haniya", "Adara", "Putri", "Dewi", "Azka", "Nurin"],
  5: ["Sulman", "Syed", "Safwan", "Muhammad Konain", "Abhinav Tota", "Christopher", "Ayzar", "Abdulrahman", "Sajeed"],
  6: ["Shayan Iqbal", "Ali Mirza", "Idris", "Nauman Iqbal", "Rabail", "Mustafa", "Maryam", "Mahmood Mirza", "Nargis Mirza"],
  7: ["Farhan Iqbal", "Aleisha", "Farhan and Aleisha kid 1", "Farhan and Aleisha  kid 2", "Farhan and Aleisha kid 3", "Maleeka", "Waqas Iqbal", "Rubina Iqbal", "Mohammad Iqbal"],
  8: ["Mr Waseem", "Mrs Waseem", " Waseem kid 1", "Waseem kid 2", "Waseem kid 3", "Waseem kid 4", "Waseem kid 5", "Mrs Zaid", "Mr Zaid"],
  9: ["Safeer adult 1", "safeer adult 2", "Safeer kid 1", "safeer kid 2", "safeer kid 3", "safeer kid 4", "Nazreen", "Nazir", "Iqra"],
  10: ["Rahma Hamza", "Rabab Kenawy", "Janna Hamza", "Sara Alellam", "Eslam", "Zain", "Mr Sohaib", "Mrs Sohaib", "Mrs Ghanim", "Mr Ghanim"],
};

export const GUEST_LIST: Guest[] = Object.entries(SEATING_DATA).flatMap(([table, names]) =>
  names.map((name) => ({ name, table: parseInt(table) }))
).sort((a, b) => a.name.localeCompare(b.name));
