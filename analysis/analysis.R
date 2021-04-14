library(tidyverse)
library(ggpubr)
library(rstatix)

# read data
exp_data <- read.csv("C:/Users/slott/OneDrive/Documents/UNI-DESKTOP-EIPRSGE/Bachelor_topics/exp_github/fractals_exp/analysis/csv_19_03_21.csv")

# add shapes and complexity to data
exp_data %>%
  mutate(shape = case_when(grepl("images/Generated_Pictures/Tri.*", exp_data$picture) == TRUE | grepl("Tri_", picture1) == TRUE ~ "Tri",
                           grepl("images/Generated_Pictures/Quad.*", exp_data$picture) == TRUE | grepl("Quad_", picture1) == TRUE ~ "Quad",
                           grepl("images/Generated_Pictures/Penta.*", exp_data$picture) == TRUE | grepl("Penta_", picture1) == TRUE ~ "Penta",
                           grepl("images/Generated_Pictures/Hexa.*", exp_data$picture) == TRUE | grepl("Hexa_", picture1) == TRUE ~ "Hexa"),
         complexity = case_when(trial_name == "key_press_first_one_comp_2" | trial_name == "key_press_first_two_comp_2" | trial_name == "key_press_second_one_comp_2" | trial_name == "key_press_second_two_comp_2" ~ 2,
                                 trial_name == "key_press_first_one_comp_3" | trial_name == "key_press_first_two_comp_3" | trial_name == "key_press_second_one_comp_3" | trial_name == "key_press_second_two_comp_3" ~ 3,
                                 trial_name == "key_press_first_one_comp_4" | trial_name == "key_press_first_two_comp_4" | trial_name == "key_press_second_one_comp_4" | trial_name == "key_press_second_two_comp_4" ~ 4),
          key_press_type = case_when(grepl(".*_first.*", exp_data$trial_name) == TRUE ~ "nF in F",
                                     grepl(".*_second.*", exp_data$trial_name) == TRUE ~ "F in nF")) -> exp_data


# key-press data
key_press_with_out <- subset(exp_data, question == "Is this a fractal?")
outlier_key_press = quantile(key_press_with_out$RT, 0.75,names = FALSE) + 1.5*(quantile(key_press_with_out$RT, 0.75,names = FALSE)-quantile(key_press_with_out$RT, 0.25,names = FALSE)) # IQR
key_press <- subset(key_press_with_out, RT <= outlier_key_press)

first_KP <- subset(key_press, trial_name == "key_press_first_one_comp_3" | trial_name == "key_press_first_two_comp_3" | trial_name == "key_press_first_one_comp_4" | trial_name == "key_press_first_two_comp_4")
second_KP <- subset(key_press, trial_name == "key_press_second_one_comp_3" | trial_name == "key_press_second_two_comp_3" | trial_name == "key_press_second_one_comp_4" | trial_name == "key_press_second_two_comp_4")
first_KP_correct <- subset(first_KP, correctness == "correct")
second_KP_correct <- subset(second_KP, correctness == "correct")

# key-press complexity
first_comp_3 <- subset(first_KP, trial_name == "key_press_first_one_comp_3" | trial_name == "key_press_first_two_comp_3")
first_comp_4 <- subset(first_KP, trial_name == "key_press_first_one_comp_4" | trial_name == "key_press_first_two_comp_4")
second_comp_3 <- subset(second_KP, trial_name == "key_press_second_one_comp_3" | trial_name == "key_press_second_two_comp_3")
second_comp_4 <- subset(second_KP, trial_name == "key_press_second_one_comp_4" | trial_name == "key_press_second_two_comp_4")
first_comp_3_correct <- subset(first_comp_3, correctness == "correct")
first_comp_4_correct <- subset(first_comp_4, correctness == "correct")
second_comp_3_correct <- subset(second_comp_3, correctness == "correct")
second_comp_4_correct <- subset(second_comp_4, correctness == "correct")

# key-press shape
key_press_Tri <- subset(key_press, TRUE  == grepl("images/Generated_Pictures/Tri.*", key_press$picture))
key_press_Quad <- subset(key_press, TRUE  == grepl("images/Generated_Pictures/Quad.*", key_press$picture))
key_press_Penta <- subset(key_press, TRUE  == grepl("images/Generated_Pictures/Penta.*", key_press$picture))
key_press_Hexa <- subset(key_press, TRUE  == grepl("images/Generated_Pictures/Hexa.*", key_press$picture))
key_press_Tri_correct <- subset(key_press_Tri, correctness == "correct")
key_press_Quad_correct <- subset(key_press_Quad, correctness == "correct")
key_press_Penta_correct <- subset(key_press_Penta, correctness == "correct")
key_press_Hexa_correct <- subset(key_press_Hexa, correctness == "correct")

# key-press fractal vs non-fractal
first_KP_fractals <- subset(first_KP, expected == "fractal")
first_KP_non_fractals <- subset(first_KP, expected == "non-fractal")
second_KP_fractals <- subset(second_KP, expected == "fractal")
second_KP_non_fractals <- subset(second_KP, expected == "non-fractal")


#Continuation_fractal_fractals <- subset(Continuation_fractal, grepl("_false_", picture 1))

# Continuation data
Continuation_with_out <- subset(exp_data, question == "Which is the correct continuation?")
outlier_Continuation = quantile(Continuation_with_out$RT, 0.75,names = FALSE) + 1.5*(quantile(Continuation_with_out$RT, 0.75,names = FALSE)-quantile(Continuation_with_out$RT, 0.25,names = FALSE)) # IQR
Continuation <- subset(Continuation_with_out, RT <= outlier_Continuation)

Continuation_fractal <- subset(Continuation, trial_name == "fractal_view_2D_fractal")
Continuation_non_fractal <- subset(Continuation, trial_name == "fractal_view_2D")
Continuation_fractal_correct <- subset(Continuation_fractal, correctness == "correct")
Continuation_non_fractal_correct <- subset(Continuation_non_fractal, correctness == "correct")
Continuation_fractal_incorrect <- subset(Continuation_fractal, correctness == "incorrect")
Continuation_non_fractal_incorrect <- subset(Continuation_non_fractal, correctness == "incorrect")

# Continuation shape
Continuation_Tri <- subset(Continuation, grepl("Tri_", picture1))
Continuation_Quad <- subset(Continuation, grepl("Quad_", picture1))
Continuation_Penta <- subset(Continuation, grepl("Penta_", picture1))
Continuation_Hexa <- subset(Continuation, grepl("Hexa_", picture1))
Continuation_fractal_Tri <- subset(Continuation_fractal_correct, grepl("Tri_", picture1))
Continuation_fractal_Quad <- subset(Continuation_fractal_correct, grepl("Quad_", picture1))
Continuation_non_fractal_Tri <- subset(Continuation_non_fractal_correct, grepl("Tri_", picture1))
Continuation_non_fractal_Quad <- subset(Continuation_non_fractal_correct, grepl("Quad_", picture1))
Continuation_fractal_Penta <- subset(Continuation_fractal_correct, grepl("Penta_", picture1))
Continuation_fractal_Hexa <- subset(Continuation_fractal_correct, grepl("Hexa_", picture1))
Continuation_non_fractal_Penta <- subset(Continuation_non_fractal_correct, grepl("Penta_", picture1))
Continuation_non_fractal_Hexa <- subset(Continuation_non_fractal_correct, grepl("Hexa_", picture1))

# Continuation fractal vs non-fractal
#Continuation_fractal_iteration <- subset(Continuation, correctness == "correct")
Continuation_iteration_right <- subset(Continuation, expected == "right")
Continuation_iteration_right_fractal <- subset(Continuation_iteration_right, grepl("false", picture1))
Continuation_iteration_right_nonFractal <- subset(Continuation_iteration_right, grepl("false", picture2))
Continuation_iteration_left <- subset(Continuation, expected == "left")
Continuation_iteration_left_fractal <-subset(Continuation_iteration_left, grepl("false",picture2))
Continuation_iteration_left_nonFractal <-subset(Continuation_iteration_left, grepl("false", picture1))

Continuation_iteration_Fractal <- rbind(Continuation_iteration_left_fractal, Continuation_iteration_right_fractal)
Continuation_iteration_nonFractal <- rbind(Continuation_iteration_left_nonFractal, Continuation_iteration_right_nonFractal)
Continuation_iteration_nonFractal_allAnswers <- Continuation_iteration_nonFractal
Continuation_iteration_Fractal_allAnswers <- Continuation_iteration_Fractal
Continuation_iteration_Fractal <- subset(Continuation_iteration_Fractal,  correctness == "correct")
Continuation_iteration_nonFractal <- subset(Continuation_iteration_nonFractal,  correctness == "correct")

# Continuation complexity
Continuation_frac_4 <- rbind(subset(Continuation_iteration_Fractal_allAnswers, grepl("_triangle_3",picture1)),subset(Continuation_iteration_Fractal_allAnswers, grepl("_circle_3",picture1)),subset(Continuation_iteration_Fractal_allAnswers, grepl("_arrow_3",picture1)),subset(Continuation_iteration_Fractal_allAnswers, grepl("_square_3",picture1)))
Continuation_frac_5 <- rbind(subset(Continuation_iteration_Fractal_allAnswers, grepl("_triangle_4",picture1)),subset(Continuation_iteration_Fractal_allAnswers, grepl("_circle_4",picture1)),subset(Continuation_iteration_Fractal_allAnswers, grepl("_arrow_4",picture1)),subset(Continuation_iteration_Fractal_allAnswers, grepl("_square_4",picture1)))
Continuation_N_frac_4 <- rbind(subset(Continuation_iteration_nonFractal_allAnswers, grepl("_triangle_3",picture1)),subset(Continuation_iteration_nonFractal_allAnswers, grepl("_circle_3",picture1)),subset(Continuation_iteration_nonFractal_allAnswers, grepl("_arrow_3",picture1)),subset(Continuation_iteration_nonFractal_allAnswers, grepl("_square_3",picture1)))
Continuation_N_frac_5 <- rbind(subset(Continuation_iteration_nonFractal_allAnswers, grepl("_triangle_4",picture1)),subset(Continuation_iteration_nonFractal_allAnswers, grepl("_circle_4",picture1)),subset(Continuation_iteration_nonFractal_allAnswers, grepl("_arrow_4",picture1)),subset(Continuation_iteration_nonFractal_allAnswers, grepl("_square_4",picture1)))
Continuation_frac_4_correct <- subset(Continuation_frac_4, correctness == "correct")
Continuation_frac_5_correct <- subset(Continuation_frac_5, correctness == "correct")
Continuation_N_frac_4_correct <- subset(Continuation_N_frac_4, correctness == "correct")
Continuation_N_frac_5_correct <- subset(Continuation_N_frac_5, correctness == "correct")

## data-tables ##

# results overview
result_overview <- matrix(c(mean(Continuation_fractal_correct$RT),median(Continuation_fractal_correct$RT),var(Continuation_fractal_correct$RT),sd(Continuation_fractal_correct$RT),sum(Continuation_fractal$correctness == "correct")/nrow(Continuation_fractal),
                            mean(Continuation_non_fractal_correct$RT),median(Continuation_non_fractal_correct$RT),var(Continuation_non_fractal_correct$RT),sd(Continuation_non_fractal_correct$RT),sum(Continuation_non_fractal$correctness == "correct")/nrow(Continuation_non_fractal),
                            mean(first_KP_correct$RT),median(first_KP_correct$RT),var(first_KP_correct$RT),sd(first_KP_correct$RT),sum(first_KP$correctness == "correct")/nrow(first_KP),
                            mean(second_KP_correct$RT),median(second_KP_correct$RT),var(second_KP_correct$RT),sd(second_KP_correct$RT),sum(second_KP$correctness == "correct")/nrow(second_KP)),ncol = 4, byrow=FALSE)
rownames(result_overview)<-c("mean", "median", "variance", "SD", "correctness")
colnames(result_overview)<-c("Fractal Cont. |", "nonFractal Cont. |", "KP non in fractal |", "KP fractal in non")
result_overviewTable <- as.table(result_overview)

# results of key press regarding fractal or non fractal
results_KP_by_fractal <- matrix(c(mean(first_KP_fractals$RT),median(first_KP_fractals$RT),var(first_KP_fractals$RT),sd(first_KP_fractals$RT),sum(first_KP_fractals$correctness == "correct")/nrow(first_KP_fractals),
                                  mean(first_KP_non_fractals$RT),median(first_KP_non_fractals$RT),var(first_KP_non_fractals$RT),sd(first_KP_non_fractals$RT),sum(first_KP_non_fractals$correctness == "correct")/nrow(first_KP_non_fractals),
                                  mean(second_KP_fractals$RT),median(second_KP_fractals$RT),var(second_KP_fractals$RT),sd(second_KP_fractals$RT),sum(second_KP_fractals$correctness == "correct")/nrow(second_KP_fractals),
                                  mean(second_KP_non_fractals$RT),median(second_KP_non_fractals$RT),var(second_KP_non_fractals$RT),sd(second_KP_non_fractals$RT),sum(second_KP_non_fractals$correctness == "correct")/nrow(second_KP_non_fractals)),ncol = 4, byrow=FALSE)
rownames(results_KP_by_fractal)<-c("mean", "median", "variance", "SD", "correctness")
colnames(results_KP_by_fractal)<-c("KP n in f -fractals |", "KP n in f -nonFractals |", "KP f in n -fractals |", "KP f in n -nonFractals")
results_KP_by_fractalTable <- as.table(results_KP_by_fractal)

# results of Continuation regarding fractal or non fractal
Continuation_by_fractal <- matrix(c(mean(Continuation_iteration_Fractal$RT),median(Continuation_iteration_Fractal$RT),var(Continuation_iteration_Fractal$RT),sd(Continuation_iteration_Fractal$RT),nrow(Continuation_iteration_Fractal)/nrow(Continuation_iteration_Fractal_allAnswers),
                                        mean(Continuation_iteration_nonFractal$RT),median(Continuation_iteration_nonFractal$RT),var(Continuation_iteration_nonFractal$RT),sd(Continuation_iteration_nonFractal$RT),nrow(Continuation_iteration_nonFractal)/nrow(Continuation_iteration_nonFractal)),ncol = 2, byrow=FALSE)
rownames(Continuation_by_fractal)<-c("mean", "median", "variance", "SD", "correctness")
colnames(Continuation_by_fractal)<-c("Cont. Fractal","Cont. Non")
Continuation_by_fractalTable <- as.table(Continuation_by_fractal)

# results of continuation regarding geometry
results_continuation_geometry <- matrix(c(mean(Continuation_fractal_Tri$RT),median(Continuation_fractal_Tri$RT),var(Continuation_fractal_Tri$RT),sd(Continuation_fractal_Tri$RT),1,
                                       mean(Continuation_fractal_Quad$RT),median(Continuation_fractal_Quad$RT),var(Continuation_fractal_Quad$RT),sd(Continuation_fractal_Quad$RT),1,
                                       mean(Continuation_non_fractal_Tri$RT),median(Continuation_non_fractal_Tri$RT),var(Continuation_non_fractal_Tri$RT),sd(Continuation_non_fractal_Tri$RT),1,
                                       mean(Continuation_non_fractal_Quad$RT),median(Continuation_non_fractal_Quad$RT),var(Continuation_non_fractal_Quad$RT),sd(Continuation_non_fractal_Quad$RT),1),ncol = 4, byrow=FALSE)
rownames(results_continuation_geometry)<-c("mean", "median", "variance", "SD", "correctness")
colnames(results_continuation_geometry) <- c("Continuation Fractal Tri", "Continuation Fractal Quad", "Continuation Fractal Non Tri", "Continuation Non Fractal Quad")
results_continuation_geometryTable <- as.table(results_continuation_geometry)

# results of key-press regarding geometry
key_press_geometry <- matrix(c( mean(key_press_Tri_correct$RT), median(key_press_Tri_correct$RT), var(key_press_Tri_correct$RT), sd(key_press_Tri_correct$RT), sum(key_press_Tri$correctness == "correct")/nrow(key_press_Tri),
                            mean(key_press_Quad_correct$RT), median(key_press_Quad_correct$RT), var(key_press_Quad_correct$RT), sd(key_press_Quad_correct$RT), sum(key_press_Quad$correctness == "correct")/nrow(key_press_Quad),
                            mean(key_press_Penta_correct$RT), median(key_press_Penta_correct$RT), var(key_press_Penta_correct$RT), sd(key_press_Penta_correct$RT), sum(key_press_Penta$correctness == "correct")/nrow(key_press_Penta),
                            mean(key_press_Hexa_correct$RT), median(key_press_Hexa_correct$RT), var(key_press_Hexa_correct$RT), sd(key_press_Hexa_correct$RT), sum(key_press_Hexa$correctness == "correct")/nrow(key_press_Hexa)), ncol = 4, byrow=FALSE)
rownames(key_press_geometry)<-c("mean", "median", "variance", "SD", "correctness")
colnames(key_press_geometry)<-c("KP-Tri", "KP-Quad", "KP-Penta", "KP-Hexa")
key_press_geometryTable <- as.table(key_press_geometry)

# results of continuation regarding complexity (sorted by fractal/non-fractal)
results_continuation_complexity <- matrix(c(mean(Continuation_frac_4_correct$RT),median(Continuation_frac_4_correct$RT),var(Continuation_frac_4_correct$RT),sd(Continuation_frac_4_correct$RT),nrow(Continuation_frac_4_correct)/nrow(Continuation_frac_4),
                                            mean(Continuation_frac_5_correct$RT),median(Continuation_frac_5_correct$RT),var(Continuation_frac_5_correct$RT),sd(Continuation_frac_5_correct$RT),nrow(Continuation_frac_5_correct)/nrow(Continuation_frac_5),
                                            mean(Continuation_N_frac_4_correct$RT),median(Continuation_N_frac_4_correct$RT),var(Continuation_N_frac_4_correct$RT),sd(Continuation_N_frac_4_correct$RT),nrow(Continuation_N_frac_4_correct)/nrow(Continuation_N_frac_4),
                                            mean(Continuation_N_frac_5_correct$RT),median(Continuation_N_frac_5_correct$RT),var(Continuation_N_frac_5_correct$RT),sd(Continuation_N_frac_5_correct$RT),nrow(Continuation_N_frac_5_correct)/nrow(Continuation_N_frac_5)),ncol = 4, byrow=FALSE)
rownames(results_continuation_complexity)<-c("mean", "median", "variance", "SD", "correctness")
colnames(results_continuation_complexity)<-c("Fractal 4 |", "Fractal 5 |", "Non-Fractal 4 |", "Non-Fractal 5 |")
results_continuation_complexityTable <- as.table(results_continuation_complexity)

# results of key-press regarding complexity (sorted by task)
results_KP_complexity <- matrix(c(mean(first_comp_3_correct$RT), median(first_comp_3_correct$RT), var(first_comp_3_correct$RT), sd(first_comp_3_correct$RT), sum(first_comp_3$correctness == "correct")/nrow(first_comp_3),
                                mean(first_comp_4_correct$RT), median(first_comp_4_correct$RT), var(first_comp_4_correct$RT), sd(first_comp_4_correct$RT), sum(first_comp_4$correctness == "correct")/nrow(first_comp_4),
                                mean(second_comp_3_correct$RT), median(second_comp_3_correct$RT), var(second_comp_3_correct$RT), sd(second_comp_3_correct$RT), sum(second_comp_3$correctness == "correct")/nrow(second_comp_3),
                                mean(second_comp_4_correct$RT), median(second_comp_4_correct$RT), var(second_comp_4_correct$RT), sd(second_comp_4_correct$RT), sum(second_comp_4$correctness == "correct")/nrow(second_comp_4)), ncol = 4, byrow=FALSE)
rownames(results_KP_complexity)<-c("mean", "median", "variance", "SD", "correctness")
colnames(results_KP_complexity)<-c("1-KP-4", "1-KP-5", "2-KP-4", "2-KP-5")
results_KP_complexityTable <- as.table(results_KP_complexity)

#open tables
result_overviewTable
results_KP_by_fractalTable
Continuation_by_fractalTable
results_continuation_geometryTable
key_press_geometryTable
results_continuation_complexityTable
results_KP_complexityTable

# table template
#table <- matrix(c(mean(),median(),var(),sd(),sum()/nrow()),ncol = 4, byrow=FALSE)
#rownames(table)<-c("mean", "median", "variance", "SD", "correctness")
#colnames <- c("","","","")
#tableTable <- as.table(table)