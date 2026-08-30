interface Student {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
}

/**
 * Enum representing valid student status values.
 * Using enum ensures type-safety and eliminates magic strings.
 */
export enum StudentStatus {
  Active = "active";
  Inactive = "inactive";
}

/**
 * Union type of all valid student status values.
 * Used for function parameter typing to maintain type-safety.
 */
export type StudentStatusValue = StudentStatus.Active | StudentStatus.Inactive;

/**
 * Converts a student status value to a user-friendly label.
 * 
 * @param status - The student status value (must be "active" or "inactive")
 * @returns A user-friendly label string ("Active Student" or "Inactive Student")
 * @throws {Error} If status is not a valid StudentStatusValue (compile-time guaranteed, runtime safe)
 */
export function formatStudentStatus(status: StudentStatusValue): string {
  switch (status) {
    case StudentStatus.Active:
      return "Active Student";
    case StudentStatus.Inactive:
      return "Inactive Student";
    default:
      // This default should never be reached if type is correct at compile time
      // But we handle it for runtime safety
      return `Unknown Student Status: "${status}"`;
  }
}

/**
 * Safely formats a student status, handling edge cases and invalid inputs.
 * Does NOT use the "any" type - uses "unknown" with type guards.
 * 
 * @param status - The status value (could be string, number, null, undefined, etc.)
 * @returns A user-friendly label or a safe fallback string
 */
export function safeFormatStudentStatus(status: unknown): string {
  // Type guard: check if status is a valid string
  if (typeof status !== "string") {
    return "Invalid Status: non-string value provided";
  }

  // Check for empty string
  if (status.trim() === "") {
    return "Invalid Status: empty string provided";
  }

  // Try to format as valid student status using type narrowing
  if (status === StudentStatus.Active || status === StudentStatus.Inactive) {
    return formatStudentStatus(status);
  }

  // Handle unexpected string values safely
  return `Student Status: "${status}" (unknown format)`;
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
  id: 1001;
  name: "Maria Santos";
  email: "maria.santos@university.edu";
  status: StudentStatus.Active;
};

console.log("Sample Student:");
console.log(formatStudent(sampleStudent));

// Test the status formatter
console.log("\nStatus Formatter Tests:");
console.log("Active:", formatStudentStatus(StudentStatus.Active));
console.log("Inactive:", formatStudentStatus(StudentStatus.Inactive));
console.log("Safe null:", safeFormatStudentStatus(null));
console.log("Safe undefined:", safeFormatStudentStatus(undefined));
console.log("Safe number:", safeFormatStudentStatus(123));
console.log("Safe invalid string:", safeFormatStudentStatus("pending"));

// Compile check: Run with: npx tsc
