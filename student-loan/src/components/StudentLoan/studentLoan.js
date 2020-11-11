import React, { Component } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';

import { FaChevronCircleRight } from 'react-icons/fa';
import { FaChevronCircleDown } from 'react-icons/fa';



export class Student extends Component {

	
	empty=this.props.data===0&&
	this.props.data1===0&&
	this.props.header===""&&
	this.props.label1===""&&
	this.props.label2===""?true:false
	doughnutData=this.props.data===0?0:this.props.data||10

	continue=this.props.continue==="Primary"?"text-primary":this.props.continue==="Secondary"?"text-secondary":
	this.props.continue==="Success"?"text-success":this.props.continue==="Danger"?"text-danger":this.props.continue==="Warning"?"text-warning":
	this.props.continue==="Info"?"text-info":this.props.continue==="Dark"?"text-dark":this.props.continue==="Muted"?"text-muted":"text-info"

	decrease=this.props.decrease==="Primary"?"text-primary":this.props.decrease==="Secondary"?"text-secondary":
	this.props.decrease==="Success"?"text-success":this.props.decrease==="Danger"?"text-danger":this.props.decrease==="Warning"?"text-warning":
	this.props.decrease==="Info"?"text-info":this.props.decrease==="Dark"?"text-dark":this.props.decrease==="Muted"?"text-muted":"text-danger"


	lineData=this.props.data1===0?[0]:this.props.data1===25?[0,25]:this.props.data1===50?[0,25,50]:
	this.props.data1===75?[0,25,50,75]:[0,25]
	lineDataLabel=this.props.data1===0?[ 'Today', '', '', 'Age 32' ]:this.props.data1===25?[ 'Age 25', 'Today', '', 'Age 32' ]:this.props.data1===50?[ 'Age 25', '', 'Today', 'Age 32' ]:
	this.props.data1===75?[ 'Age 25', '', '', 'Today' ]:[ 'Age 25', 'Today', '', 'Age 32' ]

	state = {
		labels: [ 'completed', 'Not completed' ],
		datasets: [
			{
				label: 'Rainfall',
				backgroundColor: [ this.props.color||'#009900', '#C0C0C0' ],
				hoverBackgroundColor: [ this.props.color||'#009900', '#C0C0C0' ],
				data: [ this.doughnutData, 100-this.doughnutData ]
			}
		]
	};
	
	state1 = {
		labels: this.lineDataLabel,
		datasets: [
			{
				fill: true,
				label: '1',
				lineTension: 0,
				backgroundColor: this.props.color|| '#009900',
				data: this.lineData,
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
	
	render() {
		console.log("Student Loan component");
		return (
			<div className="container mt-3" style={{backgroundColor:this.props.backgroundColor||""}}>
				<div className="row">
					<div className="col-md-12 text-left">
						<div className='h5'>Your goals</div>
						<div className="h2">{this.props.header===""?<span className="text text-muted">Add header here</span>:this.props.header||"Pay off student loan"}</div>
						<div className="row mt-3">
							<div className="col-md-3 col-sm-12">
								<div className="h4">{this.props.label1===""?<span className="text text-muted">Add doughnut header</span>:this.props.label1||"Goal progress"}</div>
								<div className="card ca mt-3 bg-light" onMouseOver={this.props.onMouseOver}>
									<div className="txx">{this.doughnutData}%</div>
									<Doughnut
										data={this.state}
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
											<div className="h6">
												<span className="text text-info">&#36;5k </span>/&#36;50k
											</div>
											<span className="tx">amount saved for goal</span>
										</div>
										<div className="col-md-4">
											<div className="h6">&#36;300</div>
											<span className="tx">monthly</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-8 ml-3 col-sm-12">
								<div className="h4">{this.props.label2===""?<span className="text text-muted">Add line graph header</span>:this.props.label2||"Goal trajectory"}</div>
								<div className="card ca1 mt-3 bg-light">
									<Line
										data={this.state1}
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
											style={this.empty?{ backgroundColor: "#C0C0C0" }:{ backgroundColor: this.props.color||'#009900' }}
											onClick={this.props.onClick}
										>
											Well funded&nbsp;&nbsp;<i className="fa fa-info-circle" aria-hidden="true"></i>
										</button>
									</div>
									<div className="col-md-9">
										<div>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco.
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-3 ml-1">
							<div className="h5"><b>We recommend:</b></div>
						</div>
						<div className="row mt-3">
							<div className="col-md-6 col-sm-12">
								<div className="card card1 mb-5">
									<div className={"h6 text "+this.continue}>
									<FaChevronCircleRight />&nbsp;&nbsp;<b>Continue
										saving when you can</b>
									</div>
									<div className="ml-4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua.
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-12">
								<div className="card card1 mb-5">
									<div className={"h6 text "+this.decrease}>
									<FaChevronCircleDown />&nbsp;&nbsp;<b>Decrease
										contributions to your IRA for now!</b>
									</div>
									<div className="ml-4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua.
									</div>
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
