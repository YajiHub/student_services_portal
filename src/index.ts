interface Student {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
}

/**
 * Type guard to check if a value is a valid student status.
 * 
 * @param status - The value to check
 * @returns True if the value is a valid student status ("active" or "inactive")
 */
function isValidStudentStatus(status: string): status is "active" | "inactive" {
  return status === "active" || status === "inactive";
}

/**
 * Converts a student status value to a user-friendly label.
 * 
 * @param status - The student status value (must be "active" or "inactive")
 * @returns A user-friendly label string ("Active Student" or "Inactive Student")
 */
function formatStudentStatus(status: "active" | "inactive"): string {
  switch (status) {
    case "active":
      return "Active Student";
    case "inactive":
      return "Inactive Student";
    default:
      return "Unknown Student Status";
  }
}

/**
 * Safely formats a student status, handling edge cases and invalid inputs.
 * Does NOT use the `any` type - uses string type guards.
 * 
 * @param status - The status value (could be string, number, null, undefined, etc.)
 * @returns A user-friendly label or a safe fallback string
 */
function safeFormatStudentStatus(status: unknown): string {
  if (typeof status !== "string") {
    return "Invalid Status: non-string value provided";
  }
  if (status.trim() === "") {
    return "Invalid Status: empty string provided";
  }
  if (isValidStudentStatus(status)) {
    return formatStudentStatus(status);
  }
  return "Student Status: " + status + " (unknown format)";
}

/**
 * Formats a student object into a readable string.
 * @param student - The student object to format
 * @returns A formatted string representation of the student
 */
function formatStudent(student: Student): string {
  return student.id + " - " + student.name + " (" + student.status + ")";
}

// Create a sample student and display the result
const sampleStudent: Student = {
  id: 1001;
  name: "Maria Santos";
  email: "maria.santos@university.edu";
  status: "active";
};

console.log("Sample Student:");
console.log(formatStudent(sampleStudent));

// Test the status formatter
console.log("Active:", formatStudentStatus("active"));
console.log("Inactive:", formatStudentStatus("inactive"));
console.log("Safe null:", safeFormatStudentStatus(null));
console.log("Safe undefined:", safeFormatStudentStatus(undefined));
console.log("Safe number:", safeFormatStudentStatus(123));
console.log("Safe invalid string:", safeFormatStudentStatus("pending"));