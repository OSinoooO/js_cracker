"""添加轨迹"""


# with open('轨迹.txt') as f:
#     trajectory_list = eval(f.read())
#     for trajectory in trajectory_list:
#         if len(trajectory) > 30:
#             trajectory_last_x = trajectory.split(',')[-1].split('-')[0]
#             trajectory = f'{trajectory_last_x}|{trajectory}'
#             print(trajectory)
#             with open('trajectory.txt', 'a', encoding='utf-8') as f:
#                 f.write(trajectory + '\n')
