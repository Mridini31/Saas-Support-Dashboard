const tickets = [
  { id: 1023, customer: "John", issue: "Theme conflict", priority: "High", status: "Open" },
  { id: 1024, customer: "Anna", issue: "Checkout bug", priority: "Medium", status: "Resolved" },
  { id: 1025, customer: "Mike", issue: "Payment issue", priority: "High", status: "Pending" },
  { id: 1026, customer: "Sara", issue: "App installation", priority: "Low", status: "Open" },
  { id: 1023, customer: "John", issue: "Theme conflict", priority: "High", status: "Open" },
  { id: 1024, customer: "Anna", issue: "Checkout bug", priority: "Medium", status: "Resolved" },
  { id: 1025, customer: "Mike", issue: "Payment issue", priority: "High", status: "Pending" },
  { id: 1026, customer: "Sara", issue: "App installation", priority: "Low", status: "Open" },

  { id: 1027, customer: "David", issue: "Billing issue", priority: "Medium", status: "Pending" },
  { id: 1028, customer: "Emily", issue: "Login problem", priority: "High", status: "Open" },
  { id: 1029, customer: "Chris", issue: "Discount code error", priority: "Low", status: "Resolved" },
  { id: 1030, customer: "Sophia", issue: "Shipping settings", priority: "Medium", status: "Open" },
  { id: 1031, customer: "Daniel", issue: "App integration", priority: "High", status: "Pending" },
  { id: 1032, customer: "Olivia", issue: "Theme customization", priority: "Low", status: "Resolved" }
];

const ticketCount = document.getElementById("ticketCount");
const table = document.getElementById("ticketTable");
const searchInput = document.getElementById("searchInput");

function displayTickets(ticketList) {
  table.innerHTML = "";
   ticketCount.textContent = `Showing ${ticketList.length} tickets`;
  ticketList.forEach(ticket => {
    const row = `
      <tr>
        <td>${ticket.id}</td>
        <td>${ticket.customer}</td>
        <td>${ticket.issue}</td>
        <td><span class="badge ${ticket.priority.toLowerCase()}">${ticket.priority}</span></td>
<td><span class="badge ${ticket.status.toLowerCase()}">${ticket.status}</span></td>
      </tr>
    `;
    
    table.innerHTML += row;
  });
}

displayTickets(tickets);

const statusFilter = document.getElementById("statusFilter");
const priorityFilter = document.getElementById("priorityFilter");

function filterTickets() {

  const statusValue = statusFilter.value;
  const priorityValue = priorityFilter.value;
  const searchValue = searchInput.value.toLowerCase();

  const filtered = tickets.filter(ticket => {

    const statusMatch = statusValue === "All" || ticket.status === statusValue;
    const priorityMatch = priorityValue === "All" || ticket.priority === priorityValue;
    const searchMatch = ticket.customer.toLowerCase().includes(searchValue);

    return statusMatch && priorityMatch && searchMatch;

  });

  displayTickets(filtered);
}

statusFilter.addEventListener("change", filterTickets);
priorityFilter.addEventListener("change", filterTickets);
searchInput.addEventListener("input", filterTickets);