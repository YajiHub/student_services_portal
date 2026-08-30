interface Student {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
}

/**
 * Formats a student object into a readable string.
 * @param student - The student object to format
 * @returns A formatted string representation of the student
 */
function formatStudent(student: Student): string {
  return `${student.id} - ${student.name} (${student.status})`;
}

// Create a sample student and display the result
const sampleStudent: Student = {
  id: 1001,
  name: "Maria Santos",
  email: "maria.santos@university.edu",
  status: "active",
};

console.log("Sample Student:");
console.log(formatStudent(sampleStudent));

// Compile check: Run with: npx tsc