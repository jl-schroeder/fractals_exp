// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here

//const key_press_task_list =


var image_list = [{p1:"images/sequence.png", p2:"images/correct_continuation.png", p3:"images/incorrect_continuation.png", answer:"left"},
{p1:"images/iteration_sequence.png", p2:"images/incorrect_iteration_continuation.png", p3:"images/correct_iteration_continuation.png", answer:"right"}
];

var continuation_list = [/*{p1:"images/Tri_images/arrow_0.png" , p2:"images/Tri_images/arrow_1.png" , p3:"images/Tri_images/arrow_2.png" ,p4:"images/Tri_images/arrow_3.png" , p5:"images/Tri_images/circle_3.png", answer:"left"},
{p1:"images/Tri_images/circle_0.png" , p2:"images/Tri_images/circle_1.png" , p3:"images/Tri_images/circle_2.png" ,p4:"images/Tri_images/square_4.png" , p5:"images/Tri_images/circle_4.png", answer:"right", p6: "images/Tri_images/circle_3.png"},
{p1:"images/Tri_images/square_0.png" , p2:"images/Tri_images/square_1.png" , p3:"images/Tri_images/square_2.png" ,p4:"images/Tri_images/square_4.png" , p5:"images/Tri_images/triangle_4.png", answer:"left", p6:"images/Tri_images/triangle_3.png"},
{p1:"images/Tri_images/arrow_0.png" , p2:"images/Tri_images/arrow_1.png" , p3:"images/Tri_images/arrow_2.png" ,p4:"images/Tri_images/arrow_4.png" , p5:"images/Tri_images/square_4.png", answer:"left", p6:"images/Tri_images/square_3.png"},
{p1:"images/Tri_images/arrow_0.png" , p2:"images/Tri_images/arrow_1.png" , p3:"images/Tri_images/arrow_2.png" ,p4:"images/Tri_images/arrow_3_false.png" , p5:"images/Tri_images/arrow_4.png", answer:"right", p6:"images/Tri_images/arrow_3.png"},
{p1:"images/Quad_images/arrow_0.png" , p2:"images/Quad_images/arrow_1.png" , p3:"images/Quad_images/arrow_2.png" ,p4:"images/Quad_images/arrow_4.png" , p5:"images/Quad_images/arrow_4_false.png", answer:"left", p6:"images/Quad_images/arrow_3.png"},
{p1:"images/Quad_images/circle_0.png" , p2:"images/Quad_images/circle_1.png" , p3:"images/Quad_images/circle_2.png" ,p4:"images/Quad_images/circle_4.png" , p5:"images/Quad_images/circle_4_false.png", answer:"left", p6:"images/Quad_images/circle_3.png"},
{p1:"images/Quad_images/square_0.png" , p2:"images/Quad_images/square_1.png" , p3:"images/Quad_images/square_2.png" ,p4:"images/Quad_images/square_4_false.png" , p5:"images/Quad_images/square_4.png", answer:"right", p6:"images/Quad_images/square_3.png"},
{p1:"images/Quad_images/triangle_0.png" , p2:"images/Quad_images/triangle_1.png" , p3:"images/Quad_images/triangle_2.png" ,p4:"images/Quad_images/triangle_4_false.png" , p5:"images/Quad_images/triangle_4.png", answer:"right", p6:"images/Quad_images/triangle_3.png"},
{p1:"images/Penta_images/triangle_0.png" , p2:"images/Penta_images/triangle_1.png" , p3:"images/Penta_images/triangle_2.png" ,p4:"images/Penta_images/triangle_3.png" , p5:"images/Penta_images/circle_3.png", answer:"left"},
{p1:"images/Penta_images/arrow_0.png" , p2:"images/Penta_images/arrow_1.png" , p3:"images/Penta_images/arrow_2.png" ,p4:"images/Penta_images/triangle_3.png" , p5:"images/Penta_images/arrow_3.png", answer:"right"},
{p1:"images/Penta_images/circle_0.png" , p2:"images/Penta_images/circle_1.png" , p3:"images/Penta_images/circle_2.png" ,p4:"images/Penta_images/circle_3.png" , p5:"images/Penta_images/arrow_down_3.png", answer:"left"},
{p1:"images/Penta_images/square_0.png" , p2:"images/Penta_images/square_1.png" , p3:"images/Penta_images/square_2.png" ,p4:"images/Penta_images/circle_3.png" , p5:"images/Penta_images/square_3.png", answer:"right"},
{p1:"images/Penta_images/arrow_down_0.png" , p2:"images/Penta_images/arrow_down_1.png" , p3:"images/Penta_images/arrow_down_2.png" ,p4:"images/Penta_images/arrow_down_3.png" , p5:"images/Penta_images/square_3.png", answer:"left"},
{p1:"images/Hexa_images/triangle_0.png" , p2:"images/Hexa_images/triangle_1.png" , p3:"images/Hexa_images/triangle_2.png" ,p4:"images/Hexa_images/triangle_3_false.png" , p5:"images/Hexa_images/triangle_3.png", answer:"right"},
{p1:"images/Hexa_images/arrow_0.png" , p2:"images/Hexa_images/arrow_1.png" , p3:"images/Hexa_images/arrow_2.png" ,p4:"images/Hexa_images/arrow_3.png" , p5:"images/Hexa_images/arrow_3_false.png", answer:"left"},
{p1:"images/Hexa_images/circle_0.png" , p2:"images/Hexa_images/circle_1.png" , p3:"images/Hexa_images/circle_2.png" ,p4:"images/Hexa_images/circle_3.png" , p5:"images/Hexa_images/circle_3_false.png", answer:"left"},
{p1:"images/Hexa_images/square_0.png" , p2:"images/Hexa_images/square_1.png" , p3:"images/Hexa_images/square_2.png" ,p4:"images/Hexa_images/square_3_false.png" , p5:"images/Hexa_images/square_3.png", answer:"right"},
{p1:"images/Hexa_images/arrow_down_0.png" , p2:"images/Hexa_images/arrow_down_1.png" , p3:"images/Hexa_images/arrow_down_2.png" ,p4:"images/Hexa_images/arrow_down_3_false.png" , p5:"images/Hexa_images/arrow_down_3.png", answer:"right"}, */



//tri-images fractal
{p1:"images/Generated_Pictures/Tri_circle_0.png", p2:"images/Generated_Pictures/Tri_circle_1.png", p3:"images/Generated_Pictures/Tri_circle_2.png", p4:"images/Generated_Pictures/Tri_circle_3.png",  p5:"images/Generated_Pictures/Tri_circle_4.png", p6:"images/Generated_Pictures/Tri_circle_4_false_4.png", answer:"left"},
{p1:"images/Generated_Pictures/Tri_circle_0.png", p2:"images/Generated_Pictures/Tri_circle_1.png", p3:"images/Generated_Pictures/Tri_circle_2.png",  p5:"images/Generated_Pictures/Tri_circle_3_false_3.png", p6:"images/Generated_Pictures/Tri_circle_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Tri_square_0.png", p2:"images/Generated_Pictures/Tri_square_1.png", p3:"images/Generated_Pictures/Tri_square_2.png", p4:"images/Generated_Pictures/Tri_square_3.png",  p5:"images/Generated_Pictures/Tri_square_4.png", p6:"images/Generated_Pictures/Tri_square_4_false_4.png", answer:"left"},
{p1:"images/Generated_Pictures/Tri_square_0.png", p2:"images/Generated_Pictures/Tri_square_1.png", p3:"images/Generated_Pictures/Tri_square_2.png",  p5:"images/Generated_Pictures/Tri_square_3.png", p6:"images/Generated_Pictures/Tri_square_3_false_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Tri_triangle_0.png", p2:"images/Generated_Pictures/Tri_triangle_1.png", p3:"images/Generated_Pictures/Tri_triangle_2.png", p4:"images/Generated_Pictures/Tri_triangle_3.png",  p5:"images/Generated_Pictures/Tri_triangle_3_false_3.png", p6:"images/Generated_Pictures/Tri_triangle_4.png", answer:"right"},
{p1:"images/Generated_Pictures/Tri_triangle_0.png", p2:"images/Generated_Pictures/Tri_triangle_1.png", p3:"images/Generated_Pictures/Tri_triangle_2.png",  p5:"images/Generated_Pictures/Tri_triangle_3_false_3.png", p6:"images/Generated_Pictures/Tri_triangle_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Tri_arrow_0.png", p2:"images/Generated_Pictures/Tri_arrow_1.png", p3:"images/Generated_Pictures/Tri_arrow_2.png", p4:"images/Generated_Pictures/Tri_arrow_3.png",  p5:"images/Generated_Pictures/Tri_arrow_4_false_4.png", p6:"images/Generated_Pictures/Tri_arrow_4.png", answer:"right"},
{p1:"images/Generated_Pictures/Tri_arrow_0.png", p2:"images/Generated_Pictures/Tri_arrow_1.png", p3:"images/Generated_Pictures/Tri_arrow_2.png",  p5:"images/Generated_Pictures/Tri_arrow_3.png", p6:"images/Generated_Pictures/Tri_arrow_3_false_3.png", answer:"left"},
//tri-images iteration
{p1:"images/Generated_Pictures/Tri_circle_3.png", p2:"images/Generated_Pictures/Tri_circle_4_iteration_1.png", p3:"images/Generated_Pictures/Tri_circle_4_iteration_2.png", p5:"images/Generated_Pictures/Tri_circle_4_iteration_3.png", p6:"images/Generated_Pictures/Tri_circle_4_false_4.png", answer:"left"},
{p1:"images/Generated_Pictures/Tri_square_3.png", p2:"images/Generated_Pictures/Tri_square_4_iteration_1.png", p3:"images/Generated_Pictures/Tri_square_4_iteration_2.png", p5:"images/Generated_Pictures/Tri_square_4_iteration_1.png", p6:"images/Generated_Pictures/Tri_square_4_iteration_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Tri_triangle_3.png", p2:"images/Generated_Pictures/Tri_triangle_4_iteration_1.png", p3:"images/Generated_Pictures/Tri_triangle_4_iteration_2.png", p5:"images/Generated_Pictures/Tri_triangle_4_iteration_3.png", p6:"images/Generated_Pictures/Tri_triangle_4_false_4.png", answer:"right"},
{p1:"images/Generated_Pictures/Tri_arrow_3.png", p2:"images/Generated_Pictures/Tri_arrow_4_iteration_1.png", p3:"images/Generated_Pictures/Tri_arrow_4_iteration_2.png", p5:"images/Generated_Pictures/Tri_arrow_4_false_3.png", p6:"images/Generated_Pictures/Tri_arrow_4_iteration_3.png", answer:"right"},

//Quad-images fractal
{p1:"images/Generated_Pictures/Quad_circle_0.png", p2:"images/Generated_Pictures/Quad_circle_1.png", p3:"images/Generated_Pictures/Quad_circle_2.png", p4:"images/Generated_Pictures/Quad_circle_3.png",  p5:"images/Generated_Pictures/Quad_circle_4.png", p6:"images/Generated_Pictures/Quad_circle_4_false_4.png", answer:"left"},
{p1:"images/Generated_Pictures/Quad_circle_0.png", p2:"images/Generated_Pictures/Quad_circle_1.png", p3:"images/Generated_Pictures/Quad_circle_2.png",  p5:"images/Generated_Pictures/Quad_circle_3_false_3.png", p6:"images/Generated_Pictures/Quad_circle_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Quad_square_0.png", p2:"images/Generated_Pictures/Quad_square_1.png", p3:"images/Generated_Pictures/Quad_square_2.png", p4:"images/Generated_Pictures/Quad_square_3.png",  p5:"images/Generated_Pictures/Quad_square_4.png", p6:"images/Generated_Pictures/Quad_square_4_false_4.png", answer:"left"},
{p1:"images/Generated_Pictures/Quad_square_0.png", p2:"images/Generated_Pictures/Quad_square_1.png", p3:"images/Generated_Pictures/Quad_square_2.png",  p5:"images/Generated_Pictures/Quad_square_3.png", p6:"images/Generated_Pictures/Quad_square_3_false_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Quad_triangle_0.png", p2:"images/Generated_Pictures/Quad_triangle_1.png", p3:"images/Generated_Pictures/Quad_triangle_2.png", p4:"images/Generated_Pictures/Quad_triangle_3.png",  p5:"images/Generated_Pictures/Quad_triangle_3_false_3.png", p6:"images/Generated_Pictures/Quad_triangle_4.png", answer:"right"},
{p1:"images/Generated_Pictures/Quad_triangle_0.png", p2:"images/Generated_Pictures/Quad_triangle_1.png", p3:"images/Generated_Pictures/Quad_triangle_2.png",  p5:"images/Generated_Pictures/Quad_triangle_3_false_3.png", p6:"images/Generated_Pictures/Quad_triangle_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Quad_arrow_0.png", p2:"images/Generated_Pictures/Quad_arrow_1.png", p3:"images/Generated_Pictures/Quad_arrow_2.png", p4:"images/Generated_Pictures/Quad_arrow_3.png",  p5:"images/Generated_Pictures/Quad_arrow_4_false_4.png", p6:"images/Generated_Pictures/Quad_arrow_4.png", answer:"right"},
{p1:"images/Generated_Pictures/Quad_arrow_0.png", p2:"images/Generated_Pictures/Quad_arrow_1.png", p3:"images/Generated_Pictures/Quad_arrow_2.png",  p5:"images/Generated_Pictures/Quad_arrow_3.png", p6:"images/Generated_Pictures/Quad_arrow_3_false_3.png", answer:"left"},
//Quad-images iteration
{p1:"images/Generated_Pictures/Quad_circle_3.png", p2:"images/Generated_Pictures/Quad_circle_4_iteration_1.png", p3:"images/Generated_Pictures/Quad_circle_4_iteration_2.png", p4:"images/Generated_Pictures/Quad_circle_4_iteration_3.png", p5:"images/Generated_Pictures/Quad_circle_4_iteration_4.png", p6:"images/Generated_Pictures/Quad_circle_4_false_4.png", answer:"left"},
{p1:"images/Generated_Pictures/Quad_square_3.png", p2:"images/Generated_Pictures/Quad_square_4_iteration_1.png", p3:"images/Generated_Pictures/Quad_square_4_iteration_2.png", p4:"images/Generated_Pictures/Quad_square_4_iteration_3.png", p5:"images/Generated_Pictures/Quad_square_4_iteration_1.png", p6:"images/Generated_Pictures/Quad_square_4_iteration_4.png", answer:"right"},
{p1:"images/Generated_Pictures/Quad_triangle_3.png", p2:"images/Generated_Pictures/Quad_triangle_4_iteration_1.png", p3:"images/Generated_Pictures/Quad_triangle_4_iteration_2.png", p4:"images/Generated_Pictures/Quad_triangle_4_iteration_3.png", p5:"images/Generated_Pictures/Quad_triangle_4_iteration_4.png", p6:"images/Generated_Pictures/Quad_triangle_4_false_4.png", answer:"right"},
{p1:"images/Generated_Pictures/Quad_arrow_3.png", p2:"images/Generated_Pictures/Quad_arrow_4_iteration_1.png", p3:"images/Generated_Pictures/Quad_arrow_4_iteration_2.png", p4:"images/Generated_Pictures/Quad_arrow_4_iteration_3.png", p5:"images/Generated_Pictures/Quad_arrow_4_false_3.png", p6:"images/Generated_Pictures/Quad_arrow_4_iteration_4.png", answer:"right"},

//Penta-images fractal
{p1:"images/Generated_Pictures/Penta_circle_0.png", p2:"images/Generated_Pictures/Penta_circle_1.png", p3:"images/Generated_Pictures/Penta_circle_2.png", p5:"images/Generated_Pictures/Penta_circle_3.png", p6:"images/Generated_Pictures/Penta_circle_3_false_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_circle_0.png", p2:"images/Generated_Pictures/Penta_circle_1.png", p3:"images/Generated_Pictures/Penta_circle_2.png", p5:"images/Generated_Pictures/Penta_circle_3_false_3.png", p6:"images/Generated_Pictures/Penta_circle_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Penta_square_0.png", p2:"images/Generated_Pictures/Penta_square_1.png", p3:"images/Generated_Pictures/Penta_square_2.png", p5:"images/Generated_Pictures/Penta_square_3.png", p6:"images/Generated_Pictures/Penta_square_3_false_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_square_0.png", p2:"images/Generated_Pictures/Penta_square_1.png", p3:"images/Generated_Pictures/Penta_square_2.png", p5:"images/Generated_Pictures/Penta_square_3.png", p6:"images/Generated_Pictures/Penta_square_3_false_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_triangle_0.png", p2:"images/Generated_Pictures/Penta_triangle_1.png", p3:"images/Generated_Pictures/Penta_triangle_2.png", p5:"images/Generated_Pictures/Penta_triangle_3_iteration_1.png", p6:"images/Generated_Pictures/Penta_triangle_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Penta_triangle_0.png", p2:"images/Generated_Pictures/Penta_triangle_1.png", p3:"images/Generated_Pictures/Penta_triangle_2.png", p5:"images/Generated_Pictures/Penta_triangle_3_false_3.png", p6:"images/Generated_Pictures/Penta_triangle_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Penta_arrow_0.png", p2:"images/Generated_Pictures/Penta_arrow_1.png", p3:"images/Generated_Pictures/Penta_arrow_2.png", p5:"images/Generated_Pictures/Penta_arrow_3_false_3.png", p6:"images/Generated_Pictures/Penta_arrow_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Penta_arrow_0.png", p2:"images/Generated_Pictures/Penta_arrow_1.png", p3:"images/Generated_Pictures/Penta_arrow_2.png", p5:"images/Generated_Pictures/Penta_arrow_3.png", p6:"images/Generated_Pictures/Penta_arrow_3_false_3.png", answer:"left"},
//Penta-images iteration
{p1:"images/Generated_Pictures/Penta_circle_2.png", p2:"images/Generated_Pictures/Penta_circle_3_iteration_1.png", p3:"images/Generated_Pictures/Penta_circle_3_iteration_2.png", p4:"images/Generated_Pictures/Penta_circle_3_iteration_3.png", p5:"images/Generated_Pictures/Penta_circle_3_iteration_4.png", p6:"images/Generated_Pictures/Penta_circle_3_false_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_square_2.png", p2:"images/Generated_Pictures/Penta_square_3_iteration_1.png", p3:"images/Generated_Pictures/Penta_square_3_iteration_2.png", p4:"images/Generated_Pictures/Penta_square_3_iteration_3.png", p5:"images/Generated_Pictures/Penta_square_3_iteration_1.png", p6:"images/Generated_Pictures/Penta_square_3_iteration_4.png", answer:"right"},
{p1:"images/Generated_Pictures/Penta_triangle_2.png", p2:"images/Generated_Pictures/Penta_triangle_3_iteration_1.png", p3:"images/Generated_Pictures/Penta_triangle_3_iteration_2.png", p4:"images/Generated_Pictures/Penta_triangle_3_iteration_3.png", p5:"images/Generated_Pictures/Penta_triangle_3_iteration_4.png", p6:"images/Generated_Pictures/Penta_triangle_3_false_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Penta_arrow_2.png", p2:"images/Generated_Pictures/Penta_arrow_3_iteration_1.png", p3:"images/Generated_Pictures/Penta_arrow_3_iteration_2.png", p4:"images/Generated_Pictures/Penta_arrow_3_iteration_3.png", p5:"images/Generated_Pictures/Penta_arrow_3_false_3.png", p6:"images/Generated_Pictures/Penta_arrow_3_iteration_4.png", answer:"right"},

//Hexa-images fractal
{p1:"images/Generated_Pictures/Hexa_circle_0.png", p2:"images/Generated_Pictures/Hexa_circle_1.png", p3:"images/Generated_Pictures/Hexa_circle_2.png", p5:"images/Generated_Pictures/Hexa_circle_3.png", p6:"images/Generated_Pictures/Hexa_circle_3_false_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_circle_0.png", p2:"images/Generated_Pictures/Hexa_circle_1.png", p3:"images/Generated_Pictures/Hexa_circle_2.png", p5:"images/Generated_Pictures/Hexa_circle_3_false_3.png", p6:"images/Generated_Pictures/Hexa_circle_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_square_0.png", p2:"images/Generated_Pictures/Hexa_square_1.png", p3:"images/Generated_Pictures/Hexa_square_2.png", p5:"images/Generated_Pictures/Hexa_square_3.png", p6:"images/Generated_Pictures/Hexa_square_3_false_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_square_0.png", p2:"images/Generated_Pictures/Hexa_square_1.png", p3:"images/Generated_Pictures/Hexa_square_2.png", p5:"images/Generated_Pictures/Hexa_square_3.png", p6:"images/Generated_Pictures/Hexa_square_3_false_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_triangle_0.png", p2:"images/Generated_Pictures/Hexa_triangle_1.png", p3:"images/Generated_Pictures/Hexa_triangle_2.png", p5:"images/Generated_Pictures/Hexa_triangle_3_false_1.png", p6:"images/Generated_Pictures/Hexa_triangle_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_triangle_0.png", p2:"images/Generated_Pictures/Hexa_triangle_1.png", p3:"images/Generated_Pictures/Hexa_triangle_2.png", p5:"images/Generated_Pictures/Hexa_triangle_3_false_3.png", p6:"images/Generated_Pictures/Hexa_triangle_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_arrow_0.png", p2:"images/Generated_Pictures/Hexa_arrow_1.png", p3:"images/Generated_Pictures/Hexa_arrow_2.png", p5:"images/Generated_Pictures/Hexa_arrow_3_false_3.png", p6:"images/Generated_Pictures/Hexa_arrow_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_arrow_0.png", p2:"images/Generated_Pictures/Hexa_arrow_1.png", p3:"images/Generated_Pictures/Hexa_arrow_2.png", p5:"images/Generated_Pictures/Hexa_arrow_3.png", p6:"images/Generated_Pictures/Hexa_arrow_3_false_3.png", answer:"left"},
//Hexa-images iteration
{p1:"images/Generated_Pictures/Hexa_circle_2.png", p2:"images/Generated_Pictures/Hexa_circle_3_iteration_1.png", p3:"images/Generated_Pictures/Hexa_circle_3_iteration_2.png", p4:"images/Generated_Pictures/Hexa_circle_3_iteration_3.png", p5:"images/Generated_Pictures/Hexa_circle_3_iteration_4.png", p6:"images/Generated_Pictures/Hexa_circle_3_false_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_square_2.png", p2:"images/Generated_Pictures/Hexa_square_3_iteration_1.png", p3:"images/Generated_Pictures/Hexa_square_3_iteration_2.png", p4:"images/Generated_Pictures/Hexa_square_3_iteration_3.png", p5:"images/Generated_Pictures/Hexa_square_3_iteration_1.png", p6:"images/Generated_Pictures/Hexa_square_3_iteration_4.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_triangle_2.png", p2:"images/Generated_Pictures/Hexa_triangle_3_iteration_1.png", p3:"images/Generated_Pictures/Hexa_triangle_3_iteration_2.png", p4:"images/Generated_Pictures/Hexa_triangle_3_iteration_3.png", p5:"images/Generated_Pictures/Hexa_triangle_3_iteration_4.png", p6:"images/Generated_Pictures/Hexa_triangle_3_false_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_arrow_2.png", p2:"images/Generated_Pictures/Hexa_arrow_3_iteration_1.png", p3:"images/Generated_Pictures/Hexa_arrow_3_iteration_2.png", p4:"images/Generated_Pictures/Hexa_arrow_3_iteration_3.png", p5:"images/Generated_Pictures/Hexa_arrow_3_false_3.png", p6:"images/Generated_Pictures/Hexa_arrow_3_iteration_4.png", answer:"right"},


//hierarchical_iteration with turn
{p1:"images/Generated_Pictures/Tri_triangle_2.png", p2:"images/Generated_Pictures/Tri_triangle_3_iteration_1_false.png", p3:"images/Generated_Pictures/Tri_triangle_3_iteration_2_false.png", p5:"images/Generated_Pictures/Tri_triangle_3_iteration_3_false.png", p6:"images/Generated_Pictures/Tri_triangle_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Tri_circle_2.png", p2:"images/Generated_Pictures/Tri_circle_3_iteration_1_false.png", p3:"images/Generated_Pictures/Tri_circle_3_iteration_2_false.png", p5:"images/Generated_Pictures/Tri_circle_3_iteration_3.png", p6:"images/Generated_Pictures/Tri_circle_3_iteration_3_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Tri_arrow_2.png", p2:"images/Generated_Pictures/Tri_arrow_3_iteration_1_false.png", p3:"images/Generated_Pictures/Tri_arrow_3_iteration_2_false.png", p5:"images/Generated_Pictures/Tri_arrow_3_iteration_3_false.png", p6:"images/Generated_Pictures/Tri_arrow_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Tri_square_2.png", p2:"images/Generated_Pictures/Tri_square_3_iteration_1_false.png", p3:"images/Generated_Pictures/Tri_square_3_iteration_2_false.png", p5:"images/Generated_Pictures/Tri_square_3_iteration_3.png", p6:"images/Generated_Pictures/Tri_square_3_false.png", answer:"right"},

{p1:"images/Generated_Pictures/Quad_triangle_2.png", p2:"images/Generated_Pictures/Quad_triangle_3_iteration_1_false.png", p3:"images/Generated_Pictures/Quad_triangle_3_iteration_2_false.png", p5:"images/Generated_Pictures/Quad_triangle_3_iteration_3.png", p6:"images/Generated_Pictures/Quad_triangle_3_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Quad_circle_2.png", p2:"images/Generated_Pictures/Quad_circle_3_iteration_1_false.png", p3:"images/Generated_Pictures/Quad_circle_3_iteration_2_false.png", p5:"images/Generated_Pictures/Quad_circle_3_iteration_3_false.png", p6:"images/Generated_Pictures/Quad_circle_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Quad_arrow_2.png", p2:"images/Generated_Pictures/Quad_arrow_3_iteration_1_false.png", p3:"images/Generated_Pictures/Quad_arrow_3_iteration_2_false.png", p5:"images/Generated_Pictures/Quad_arrow_3_iteration_3_false.png", p6:"images/Generated_Pictures/Quad_arrow_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Quad_square_2.png", p2:"images/Generated_Pictures/Quad_square_3_iteration_1_false.png", p3:"images/Generated_Pictures/Quad_square_3_iteration_2_false.png", p5:"images/Generated_Pictures/Quad_square_3_iteration_3.png", p6:"images/Generated_Pictures/Quad_square_3_false.png", answer:"right"},

{p1:"images/Generated_Pictures/Penta_triangle_2.png", p2:"images/Generated_Pictures/Penta_triangle_3_iteration_1_false.png", p3:"images/Generated_Pictures/Penta_triangle_3_iteration_2_false.png", p4:"images/Generated_Pictures/Penta_triangle_3_iteration_3_false.png", p5:"images/Generated_Pictures/Penta_triangle_3_iteration_4_false.png", p6:"images/Generated_Pictures/Penta_triangle_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_triangle_3_iteration_1_false.png", p2:"images/Generated_Pictures/Penta_triangle_3_iteration_2_false.png", p3:"images/Generated_Pictures/Penta_triangle_3_iteration_3_false.png", p4:"images/Generated_Pictures/Penta_triangle_3_iteration_4_false.png", p5:"images/Generated_Pictures/Penta_triangle_3_iteration_4.png", p6:"images/Generated_Pictures/Penta_triangle_3_iteration_5_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Penta_circle_2.png", p2:"images/Generated_Pictures/Penta_circle_3_iteration_1_false.png", p3:"images/Generated_Pictures/Penta_circle_3_iteration_2_false.png", p5:"images/Generated_Pictures/Penta_circle_3_iteration_3_false.png", p6:"images/Generated_Pictures/Penta_circle_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_circle_3_iteration_1_false.png", p2:"images/Generated_Pictures/Penta_circle_3_iteration_2_false.png", p3:"images/Generated_Pictures/Penta_circle_3_iteration_3_false.png", p4:"images/Generated_Pictures/Penta_circle_3_iteration_4_false.png", p5:"images/Generated_Pictures/Penta_circle_3_iteration_5_false.png", p6:"images/Generated_Pictures/Penta_circle_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_arrow_2.png", p2:"images/Generated_Pictures/Penta_arrow_3_iteration_1_false.png", p3:"images/Generated_Pictures/Penta_arrow_3_iteration_2_false.png", p5:"images/Generated_Pictures/Penta_arrow_3_iteration_3_false.png", p6:"images/Generated_Pictures/Penta_arrow_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_arrow_3_iteration_1_false.png", p2:"images/Generated_Pictures/Penta_arrow_3_iteration_2_false.png", p3:"images/Generated_Pictures/Penta_arrow_3_iteration_3_false.png", p4:"images/Generated_Pictures/Penta_arrow_3_iteration_4_false.png", p5:"images/Generated_Pictures/Penta_arrow_3_iteration_5_false.png", p6:"images/Generated_Pictures/Penta_arrow_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_square_2.png", p2:"images/Generated_Pictures/Penta_square_3_iteration_1_false.png", p3:"images/Generated_Pictures/Penta_square_3_iteration_2_false.png", p5:"images/Generated_Pictures/Penta_square_3_iteration_3_false.png", p6:"images/Generated_Pictures/Penta_square_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_square_3_iteration_1_false.png", p2:"images/Generated_Pictures/Penta_square_3_iteration_2_false.png", p3:"images/Generated_Pictures/Penta_square_3_iteration_3_false.png", p4:"images/Generated_Pictures/Penta_square_3_iteration_4_false.png", p5:"images/Generated_Pictures/Penta_square_3_iteration_3.png", p6:"images/Generated_Pictures/Penta_square_3_iteration_5_false.png", answer:"right"},

{p1:"images/Generated_Pictures/Hexa_triangle_2.png", p2:"images/Generated_Pictures/Hexa_triangle_3_iteration_1_false.png", p3:"images/Generated_Pictures/Hexa_triangle_3_iteration_2_false.png", p5:"images/Generated_Pictures/Hexa_triangle_3_iteration_3_false.png", p6:"images/Generated_Pictures/Hexa_triangle_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_circle_2.png", p2:"images/Generated_Pictures/Hexa_circle_3_iteration_1_false.png", p3:"images/Generated_Pictures/Hexa_circle_3_iteration_2_false.png", p5:"images/Generated_Pictures/Hexa_circle_3.png", p6:"images/Generated_Pictures/Hexa_circle_3_iteration_3_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_arrow_2.png", p2:"images/Generated_Pictures/Hexa_arrow_3_iteration_1_false.png", p3:"images/Generated_Pictures/Hexa_arrow_3_iteration_2_false.png", p5:"images/Generated_Pictures/Hexa_arrow_3_iteration_3_false.png", p6:"images/Generated_Pictures/Hexa_arrow_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_square_2.png", p2:"images/Generated_Pictures/Hexa_square_3_iteration_1_false.png", p3:"images/Generated_Pictures/Hexa_square_3_iteration_2_false.png", p5:"images/Generated_Pictures/Hexa_square_3.png", p6:"images/Generated_Pictures/Hexa_square_3_iteration_3_false.png", answer:"right"},

{p1:"images/Generated_Pictures/Hexa_triangle_3_iteration_1_false.png", p2:"images/Generated_Pictures/Hexa_triangle_3_iteration_2_false.png", p3:"images/Generated_Pictures/Hexa_triangle_3_iteration_3_false.png", p4:"images/Generated_Pictures/Hexa_triangle_3_iteration_4_false.png", p5:"images/Generated_Pictures/Hexa_triangle_3_iteration_5_false.png", p6:"images/Generated_Pictures/Hexa_triangle_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_triangle_3_iteration_2_false.png", p2:"images/Generated_Pictures/Hexa_triangle_3_iteration_3_false.png", p3:"images/Generated_Pictures/Hexa_triangle_3_iteration_4_false.png", p4:"images/Generated_Pictures/Hexa_triangle_3_iteration_5_false.png", p5:"images/Generated_Pictures/Hexa_triangle_3.png", p6:"images/Generated_Pictures/Hexa_triangle_3_iteration_6_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_circle_3_iteration_1_false.png", p2:"images/Generated_Pictures/Hexa_circle_3_iteration_2_false.png", p3:"images/Generated_Pictures/Hexa_circle_3_iteration_3_false.png", p4:"images/Generated_Pictures/Hexa_circle_3_iteration_4_false.png", p5:"images/Generated_Pictures/Hexa_circle_3.png", p6:"images/Generated_Pictures/Hexa_circle_3_iteration_5_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_circle_3_iteration_2_false.png", p2:"images/Generated_Pictures/Hexa_circle_3_iteration_3_false.png", p3:"images/Generated_Pictures/Hexa_circle_3_iteration_4_false.png", p4:"images/Generated_Pictures/Hexa_circle_3_iteration_5_false.png", p5:"images/Generated_Pictures/Hexa_circle_3_iteration_6_false.png", p6:"images/Generated_Pictures/Hexa_circle_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_arrow_3_iteration_1_false.png", p2:"images/Generated_Pictures/Hexa_arrow_3_iteration_2_false.png", p3:"images/Generated_Pictures/Hexa_arrow_3_iteration_3_false.png", p4:"images/Generated_Pictures/Hexa_arrow_3_iteration_4_false.png", p5:"images/Generated_Pictures/Hexa_arrow_3_iteration_5_false.png", p6:"images/Generated_Pictures/Hexa_arrow_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_arrow_3_iteration_2_false.png", p2:"images/Generated_Pictures/Hexa_arrow_3_iteration_3_false.png", p3:"images/Generated_Pictures/Hexa_arrow_3_iteration_4_false.png", p4:"images/Generated_Pictures/Hexa_arrow_3_iteration_5_false.png", p5:"images/Generated_Pictures/Hexa_arrow_3_iteration_6_false.png", p6:"images/Generated_Pictures/Hexa_arrow_3.png", answer:"left"},

{p1:"images/Generated_Pictures/Hexa_square_3_iteration_1_false.png", p2:"images/Generated_Pictures/Hexa_square_3_iteration_2_false.png", p3:"images/Generated_Pictures/Hexa_square_3_iteration_3_false.png", p4:"images/Generated_Pictures/Hexa_square_3_iteration_4_false.png", p5:"images/Generated_Pictures/Hexa_square_3.png", p6:"images/Generated_Pictures/Hexa_square_3_iteration_5_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_square_3_iteration_1_false.png", p2:"images/Generated_Pictures/Hexa_square_3_iteration_2_false.png", p3:"images/Generated_Pictures/Hexa_square_3_iteration_3_false.png", p4:"images/Generated_Pictures/Hexa_square_3_iteration_4_false.png", p5:"images/Generated_Pictures/Hexa_square_3_iteration_5_false.png", p6:"images/Generated_Pictures/Hexa_square_3.png", answer:"left"},
];

continuation_list = shuffle(continuation_list);

// {p1:"images/Generated_Pictures/", p2:"images/Generated_Pictures/", p3:"images/Generated_Pictures/", p4:"images/Generated_Pictures/",  p5:"images/Generated_Pictures/", p6:"images/Generated_Pictures/", answer:""},
//{p1:"images/", p2:"images/", p3:"images/", answer:""}

// get individual ID for each participant
var participantID = getRandomInt(999999);
/* Helper functions
*
*
*/

// funtion to shuffle an array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here


/* Regex-terms

Fractal: [A-Z]{1}[a-z]*_[a-z]*_[1-9].png

Turn: [A-Z]{1}[a-z]*_[a-z]*_[1-9]_false_3

iteration: [A-Z]{1}[a-z]*_[a-z]*_[1-9]_iteration_[1-9]*.png

*/
// function to assess type of foil
function assessFoil(foil){

  const fractalRegEx = new RegExp('[A-Z]{1}[a-z]*_[a-z]*_[1-9].png');
  const turnRegEx = new RegExp('[A-Z]{1}[a-z]*_[a-z]*_[1-9]_false_3');
  const iterationRegEx = new RegExp('[A-Z]{1}[a-z]*_[a-z]*_[1-9]_iteration_[1-9]*.png');

  if(fractalRegEx.test(foil) == true){
    //console.log("frac"); //TESTING
    return "fractal";
  }
  if(turnRegEx.test(foil) == true){
    //console.log("turn"); //TESTING
    return "turn";
  }
  if(iterationRegEx.test(foil) == true){
    //console.log("it"); //TESTING
    return "iteration";
  }
}

/* Hooks
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/
