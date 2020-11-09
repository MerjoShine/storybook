import React, { Component } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';

import { FaChevronCircleRight } from 'react-icons/fa';
import { FaChevronCircleDown } from 'react-icons/fa';

const state = {
	labels: [ 'completed', 'Not completed' ],
	datasets: [
		{
			label: 'Rainfall',
			backgroundColor: [ '#009900', '#C0C0C0' ],
			hoverBackgroundColor: [ '#009900', '#C0C0C0' ],
			data: [ 10, 90 ]
		}
	]
};

const state1 = {
	labels: [ 'Age 25', 'Today', '', 'Age 32' ],
	datasets: [
		{
			fill: true,
			label: '1',
			lineTension: 0,
			backgroundColor: '#009900',
			data: [ 0, 25 ],
			pointRadius: 0
		},
		{
			label: '2',
			fill: true,
			lineTension: 0,
			backgroundColor: '#C0C0C0',
			borderWidth: 0,
			data: [0,25, 50, 75 ],
			pointRadius: 0
		}
	]
};

export class Student extends Component {
	render() {
		return (
			<div className="container mt-3">
				<div className="row">
					<div className="col-md-12 text-left">
						<h5>Your goals</h5>
						<h2>Pay off student loan</h2>
						<div className="row mt-3">
							<div className="col-md-3 col-sm-12">
								<h4>Goal progress</h4>
								<div className="card ca mt-3 bg-light">
									<div className="txx">10%</div>
									<Doughnut
										data={state}
										width={100}
										height={100}
										options={{
											elements: {
												arc: {
													borderWidth: 0
												}
											},
											cutoutPercentage: 70,
											legend: {
												display: false,
												position: 'right'
											}
										}}
									/>
									<div className="row mt-4">
										<div className="col-md-8">
											<h6>
												<span className="text text-info">&#36;5k </span>/&#36;50k
											</h6>
											<span className="tx">amount saved for goal</span>
										</div>
										<div className="col-md-4">
											<h6>&#36;300</h6>
											<span className="tx">monthly</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-8 ml-3 col-sm-12">
								<h4>Goal trajectory</h4>
								<div className="card ca1 mt-3 bg-light">
									<Line
										data={state1}
										height={90}
										options={{
											legend: {
												display: false
											},

											scales: {
												yAxes: [
													{
														position: 'right',
														ticks: {
															beginAtZero: true,
															min: 0,
															max: 75,
															stepSize: 15
														}
													}
												]
											}
										}}
									/>
								</div>
								<div className="row mt-4">
									<div className="col-md-3">
										<button
											className="btn btn-block text-light"
											style={{ backgroundColor: '#009900' }}
										>
											Well funded&nbsp;&nbsp;<i class="fa fa-info-circle" aria-hidden="true"></i>
										</button>
									</div>
									<div className="col-md-9">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-3 ml-1">
							<h5><b>We recommend:</b></h5>
						</div>
						<div className="row mt-3">
							<div className="col-md-6 col-sm-12">
								<div className="card card1 mb-5">
									<h6 className="text text-info">
									<FaChevronCircleRight />&nbsp;&nbsp;<b>Continue
										saving when you can</b>
									</h6>
									<p className="ml-4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua.
									</p>
								</div>
							</div>
							<div className="col-md-6 col-sm-12">
								<div className="card card1 mb-5">
									<h6 className="text text-danger">
									<FaChevronCircleDown />&nbsp;&nbsp;<b>Decrease
										contributions to your IRA for now!</b>
									</h6>
									<p className="ml-4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Student;
