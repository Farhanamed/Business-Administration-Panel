import { create } from "zustand";

// Sample user data
const userData = [
  { id: 202178, name: 'Farhan Ahmed', designation: 'Human Resources Manager', email: 'farhanahmed73368@gmail.com' },
  { "id": 202299, "name": "George White", "designation": "Chief Financial Officer", "email": "georgew@dsm.in" },
  { "id": 202305, "name": "Nancy Harris", "designation": "Graphic Designer", "email": "nancy@dsm.in" },
  { "id": 202318, "name": "Chris Lee", "designation": "Project Manager", "email": "chrisl@dsm.in" },
  { "id": 202329, "name": "Karen Johnson", "designation": "Content Strategist", "email": "karenj@dsm.in" },
  { "id": 202341, "name": "Tom Walker", "designation": "Technical Support Specialist", "email": "tomw@dsm.in" },
  { "id": 202356, "name": "Jessica Brown", "designation": "Public Relations Manager", "email": "jessica@dsm.in" },
  { "id": 202372, "name": "Sam Green", "designation": "Software Developer", "email": "samg@dsm.in" },
  { "id": 202387, "name": "Betty Clark", "designation": "Training Coordinator", "email": "bettyc@dsm.in" },
  { "id": 202404, "name": "Andrew Taylor", "designation": "Database Administrator", "email": "andrewt@dsm.in" },
  { "id": 202419, "name": "Samantha Lewis", "designation": "Social Media Specialist", "email": "samantha@dsm.in" },
  { "id": 202133, "name": "Rajesh Kumar", "designation": "Administrative Assistant", "email": "rajesh907@dsm.in" },
{ "id": 202149, "name": "Priya Sharma", "designation": "Human Resources Manager", "email": "priya@dsm.in" },
{ "id": 202193, "name": "Vikram Singh", "designation": "Operations Manager", "email": "vikram@dsm.in" },
{ "id": 202208, "name": "Anjali Gupta", "designation": "Marketing Manager", "email": "anjali@dsm.in" },
{ "id": 202221, "name": "Ravi Patel", "designation": "IT Manager", "email": "ravi@dsm.in" },
{ "id": 202247, "name": "Neha Joshi", "designation": "Customer Service Representative", "email": "neha@dsm.in" },
{ "id": 202265, "name": "Arjun Nair", "designation": "Sales Representative", "email": "arjun@dsm.in" },
{ "id": 202281, "name": "Sonia Reddy", "designation": "Accountant", "email": "sonia@dsm.in" },

  // Add more users as needed
];

// Create a Zustand store for managing users
const useUsers = create((set) => ({
  users: userData,
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  removeUser: (userId) => set((state) => ({ users: state.users.filter(user => user.id !== userId) })),
  updateUser: (userId, updatedUserData) => set((state) => ({
    users: state.users.map(user => (user.id === userId ? { ...user, ...updatedUserData } : user))
  })),
}));
export default useUsers;
