// import '../styles/global.css';
// import { Icon } from '../assets/icons/index';
// import { Button } from '../primitives/Button';

// export function Buttons () {
//   return (
//     <div className="app">
      
//       {/* primary md */}
//       <div className="grid">
//         <Button sort="primary" size="md">
//           Label
//         </Button>

//         <Button sort="primary" size="md">
//           <Icon name="arrow_left"/>
//           Label
//         </Button>

//         <Button sort="primary" size="md">
//           Label
//           <Icon name="arrow_right"/>
//         </Button>

//         <Button sort="primary" size="md">
//           <Icon className="icon-only" name="arrow_left"/>
//         </Button>

//         <Button sort="primary" size="md">
//           <Icon className="icon-only" name="arrow_right"/>
//         </Button>

//         {/* Disabled states */}
//         <Button disabled sort="primary" size="md">
//           Disabled
//         </Button>

//         <Button disabled sort="primary" size="md">
//           <Icon name="arrow_left"/>
//           Disabled
//         </Button>

//         <Button disabled sort="primary" size="md">
//         Disabled
//           <Icon name="arrow_right"/>
//         </Button>

//         <Button disabled sort="primary" size="md">
//           <Icon className="icon-only" name="arrow_left"/>
//         </Button>

//         <Button disabled sort="primary" size="md">
//           <Icon className="icon-only" name="arrow_right"/>
//         </Button>
//       </div>
//       <div className="grid">
//         <Button sort="primary" outline="primary" size="md">
//           Label
//         </Button>

//         <Button sort="primary" outline="primary" size="md">
//           <Icon name="arrow_left"/>
//           Label
//         </Button>

//         <Button sort="primary" outline="primary" size="md">
//           Label
//           <Icon name="arrow_right"/>
//         </Button>

//         <Button sort="primary" outline="primary" size="md">
//           <Icon className="icon-only" name="arrow_left"/>
//         </Button>

//         <Button sort="primary" outline="primary" size="md">
//           <Icon className="icon-only" name="arrow_right"/>
//         </Button>

//         {/* Disabled states */}
//         <Button disabled sort="primary" outline="primary"  size="md">
//           Disabled
//         </Button>

//         <Button disabled sort="primary" outline="primary"  size="md">
//           <Icon name="arrow_left"/>
//           Disabled
//         </Button>

//         <Button disabled sort="primary" outline="primary"  size="md">
//         Disabled
//           <Icon name="arrow_right"/>
//         </Button>

//         <Button disabled sort="primary" outline="primary"  size="md">
//           <Icon className="icon-only" name="arrow_left"/>
//         </Button>

//         <Button disabled sort="primary" outline="primary"  size="md">
//           <Icon className="icon-only" name="arrow_right"/>
//         </Button>
//       </div>

//       <div className="grid">
//         <Button sort="primary" depth="primary" size="md" >
//           Label
//         </Button>

//         <Button sort="primary" depth="primary" size="md">
//           <Icon name="arrow_left"/>
//           Label
//         </Button>

//         <Button sort="primary" depth="primary" size="md">
//           Label
//           <Icon name="arrow_right"/>
//         </Button>

//         <Button sort="primary" depth="primary" size="md">
//           <Icon className="icon-only" name="arrow_left"/>
//         </Button>

//         <Button sort="primary" depth="primary" size="md">
//           <Icon className="icon-only" name="arrow_right"/>
//         </Button>
//       </div>

//       {/* primary sm */}
//       <div className="grid">
//         <Button sort="primary" size="sm">
//           Label
//         </Button>

//         <Button sort="primary" size="sm">
//           <Icon name="arrow_left"/>
//           Label
//         </Button>

//         <Button sort="primary" size="sm">
//           Label
//           <Icon name="arrow_right"/>
//         </Button>

//         <Button sort="primary" size="sm">
//           <Icon className="icon-only" name="arrow_left"/>
//         </Button>

//         <Button sort="primary" size="sm">
//           <Icon className="icon-only" name="arrow_right"/>
//         </Button>
//       </div>
//       <div className="grid">
//         <Button sort="primary" outline="primary" size="sm">
//           Label
//         </Button>

//         <Button sort="primary" outline="primary" size="sm">
//           <Icon name="arrow_left"/>
//           Label
//         </Button>

//         <Button sort="primary" outline="primary" size="sm">
//           Label
//           <Icon name="arrow_right"/>
//         </Button>

//         <Button sort="primary" outline="primary" size="sm">
//           <Icon className="icon-only" name="arrow_left"/>
//         </Button>

//         <Button sort="primary" outline="primary" size="sm">
//           <Icon className="icon-only" name="arrow_right"/>
//         </Button>
//       </div>

//       <div className="grid">
//         <Button sort="primary" depth="primary" size="sm" >
//           Label
//         </Button>

//         <Button sort="primary" depth="primary" size="sm">
//           <Icon name="arrow_left"/>
//           Label
//         </Button>

//         <Button sort="primary" depth="primary" size="sm">
//           Label
//           <Icon name="arrow_right"/>
//         </Button>

//         <Button sort="primary" depth="primary" size="sm">
//           <Icon className="icon-only" name="arrow_left"/>
//         </Button>

//         <Button sort="primary" depth="primary" size="sm">
//           <Icon className="icon-only" name="arrow_right"/>
//         </Button>
//       </div>

//       {/* secondary md */}
//       <div className="grid">
//         <Button sort="secondary" size="md">
//             Label
//           </Button>

//           <Button sort="secondary" size="md">
//             <Icon name="arrow_left"/>
//             Label
//           </Button>

//           <Button sort="secondary" size="md">
//             Label
//             <Icon name="arrow_right"/>
//           </Button>

//           <Button sort="secondary" size="md">
//             <Icon className="icon-only" name="arrow_left"/>
//           </Button>

//           <Button sort="secondary" size="md">
//             <Icon className="icon-only" name="arrow_right"/>
//           </Button>
//       </div>
//       <div className="grid">
//         <Button sort="secondary" outline="secondary" size="md">
//             Label
//           </Button>

//           <Button sort="secondary" outline="secondary" size="md">
//             <Icon name="arrow_left"/>
//             Label
//           </Button>

//           <Button sort="secondary" outline="secondary" size="md">
//             Label
//             <Icon name="arrow_right"/>
//           </Button>

//           <Button sort="secondary" outline="secondary" size="md">
//             <Icon className="icon-only" name="arrow_left"/>
//           </Button>

//           <Button sort="secondary" outline="secondary" size="md">
//             <Icon className="icon-only" name="arrow_right"/>
//           </Button>
//       </div>
//       <div className="grid">
//           <Button sort="secondary" depth="secondary" size="md">
//             Label
//           </Button>

//           <Button sort="secondary" depth="secondary" size="md">
//             <Icon name="arrow_left"/>
//             Label
//           </Button>

//           <Button sort="secondary" depth="secondary" size="md">
//             Label
//             <Icon name="arrow_right"/>
//           </Button>

//           <Button sort="secondary" depth="secondary" size="md">
//             <Icon className="icon-only" name="arrow_left"/>
//           </Button>

//           <Button sort="secondary" depth="secondary" size="md">
//             <Icon className="icon-only" name="arrow_right"/>
//           </Button>
//       </div>

//       {/* secondary sm */}
//       <div className="grid">
//         <Button sort="secondary" size="sm">
//             Label
//           </Button>

//           <Button sort="secondary" size="sm">
//             <Icon name="arrow_left"/>
//             Label
//           </Button>

//           <Button sort="secondary" size="sm">
//             Label
//             <Icon name="arrow_right"/>
//           </Button>

//           <Button sort="secondary" size="sm">
//             <Icon className="icon-only" name="arrow_left"/>
//           </Button>

//           <Button sort="secondary" size="sm">
//             <Icon className="icon-only" name="arrow_right"/>
//           </Button>
//       </div>
//       <div className="grid">
//         <Button sort="secondary" outline="secondary" size="sm">
//             Label
//           </Button>

//           <Button sort="secondary" outline="secondary" size="sm">
//             <Icon name="arrow_left"/>
//             Label
//           </Button>

//           <Button sort="secondary" outline="secondary" size="sm">
//             Label
//             <Icon name="arrow_right"/>
//           </Button>

//           <Button sort="secondary" outline="secondary" size="sm">
//             <Icon className="icon-only" name="arrow_left"/>
//           </Button>

//           <Button sort="secondary" outline="secondary" size="sm">
//             <Icon className="icon-only" name="arrow_right"/>
//           </Button>
//       </div>

//       <div className="grid">
//           <Button sort="secondary" depth="secondary" size="sm">
//             Label
//           </Button>

//           <Button sort="secondary" depth="secondary" size="sm">
//             <Icon name="arrow_left"/>
//             Label
//           </Button>

//           <Button sort="secondary" depth="secondary" size="sm">
//             Label
//             <Icon name="arrow_right"/>
//           </Button>

//           <Button sort="secondary" depth="secondary" size="sm">
//             <Icon className="icon-only" name="arrow_left"/>
//           </Button>

//           <Button sort="secondary" depth="secondary" size="sm">
//             <Icon className="icon-only" name="arrow_right"/>
//           </Button>
//       </div>
//     </div>
//   );
// }

// export default Button;
