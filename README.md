### README: **Rewards Summary Page for React Application**

---

#### **Project Overview**

This project implements a **Rewards Summary Page** using **React** for displaying a user's cashback rewards and transaction history. It includes multiple sections that allow users to view and interact with their rewards, earnings, and cashback history.

### **Key Features**

1. **Profile Section**:

   - Displays the user’s profile image, name, and balance.
   - Includes an **Invite Friends** button that encourages users to invite others to the platform.

2. **Earnings Overview**:

   - Displays details of rewards earned from previous transactions (e.g., discounts and promotions).
   - Shows information such as the amount earned and the date the reward was generated.

3. **Cashback History**:

   - Lists past transactions that contributed to the user’s cashback.
   - Displays key details such as the **transaction date**, **amount earned**, and **booking details**.

4. **Redeem Rewards**:

   - Provides options for users to redeem their rewards via **Direct Cashout** or by **Applying Promo Codes**.

5. **Animations and Effects**:
   - Smooth animations are added to enhance user experience, including fade-in effects and hover effects on buttons and transaction items.

### **Folder Structure**

```bash
src/
├── components/
│   ├── RewardsPage.js        # Main React component for the Rewards Summary Page
│   ├── RewardsPage.css       # Styling and animations for the page
└── App.js                    # Entry point to render RewardsPage
```

### **Technology Stack**

- **React**: The entire Rewards Summary page is developed as a React component.
- **CSS**: Standard CSS is used for styling the page. The design is responsive and includes animations and hover effects.
- **Tailwind CSS**: The initial layout was designed using Tailwind CSS utility classes, but custom CSS was preferred for detailed control over the animations and responsive design.

---

### **Implementation Details**

#### 1. **Profile Section**

- **Design Choice**: I positioned the profile section at the top of the page, showing the user's avatar, name, and current balance. The layout is responsive, ensuring that the profile image and text stack vertically on mobile but are aligned horizontally on desktop views.
- **Styling**: I used flexbox for alignment, added padding for spacing, and made the avatar circular using `border-radius: 50%`.
- **Animation**: The profile section fades in as the page loads, giving a subtle entry animation for a smoother user experience.

#### 2. **Cashback History**

- **Purpose**: This section shows detailed information about previous cashback transactions, such as the **transaction date**, **amount earned**, and **booking details**.
- **Design Choice**: A list of previous cashback transactions is presented in a card-like format with clearly separated details.
- **Styling**: Each transaction is designed using flexbox to ensure the transaction details and amount are aligned neatly. Margins and padding ensure proper spacing, and hover effects highlight each item on interaction.
- **Animation**: Each cashback history item has a **hover effect** that slightly scales the item and changes the background color. When the section loads, it fades in smoothly.

#### 3. **Earnings Section**

- **Design Choice**: The earnings section highlights the user's previously earned rewards from promotions and referrals. The amounts are listed with the date of earning and a brief description of the promotion.
- **Styling**: Flexbox is used to ensure proper alignment. I added hover effects to provide visual feedback to users when they hover over earnings.
- **Animation**: Like the cashback history, hover effects are applied to earnings, with a slight background color change and scaling for better interactivity.

#### 4. **Redeem Rewards Section**

- **Design Choice**: Users can choose to **cash out** or **apply promo codes** using two buttons. This encourages users to interact with their rewards.
- **Styling**: I used flexbox to align the text and icons in a neat row. Buttons are styled with rounded edges and a transition effect on hover.
- **Animation**: When hovering over the buttons, they lift slightly and change color, providing immediate feedback to users.

#### 5. **Footer Section**

- **Design Choice**: The footer contains a **Cash Out Now** button, prominently placed and centered on desktop view, encouraging users to redeem their available balance.
- **Styling**: The button is styled with a vibrant blue background color and rounded edges, making it the most prominent call to action on the page.
- **Animation**: The button has a hover effect that lifts it slightly and changes the background color to green, signaling its interactivity.

---

### **Animations and Effects**

I integrated CSS animations and transitions to enhance the user experience:

- **Fade-in Animation**: Applied to the entire page, the profile section, and the cashback history section to create a smooth loading effect.
- **Hover Effects**: Implemented for interactive elements like buttons, cashback history items, and earnings items. On hover, these elements slightly scale up, and their background colors change to provide visual feedback.
- **Transitions**: Smooth transitions are added to buttons and hover effects to ensure the interactions feel natural and polished.

---

### **Design and Responsiveness**

The layout is designed to be **responsive** across different screen sizes:

- **Mobile-first approach**: The design is optimized for mobile devices, with components stacking vertically for better readability and usability on smaller screens.
- **Desktop view**: On larger screens, the layout adjusts to place the profile section on the left side and center the footer and content. Elements are spaced out more generously on desktop to take advantage of the larger screen real estate.

---

### **Key Design Decisions**

1. **Mobile-first Design**: I started with a mobile-friendly layout, ensuring that the page is easy to use and visually appealing on smaller screens. I then introduced media queries to optimize the layout for larger screens (e.g., aligning the profile section to the left).
2. **Custom Animations**: Instead of relying solely on utility classes, I implemented custom animations to make the page more dynamic. Animations such as **fade-in** for the page loading and **hover effects** on interactive elements improve the overall experience.

3. **User-centric Interactions**: All buttons and interactive elements feature hover effects to enhance usability. This ensures that users have a smooth and responsive experience when navigating the page.

---

### **Future Improvements**

1. **Real Data Integration**: The current version uses dummy data for the cashback history and earnings sections. Future versions can integrate real data from an API to make the rewards page fully functional.
2. **Advanced Animations**: I can further enhance the animations by introducing more advanced techniques like staggered transitions using libraries like **Framer Motion**.

---

### **Conclusion**

This project demonstrates a **responsive**, **interactive**, and **animated** rewards summary page using **React**. The design choices and animations aim to create an engaging user experience, encouraging interaction with the rewards and cashback history.
